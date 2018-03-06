/**
 *  REST Server for Contacts application
 *
 *  getContacts()             '/api/contacts'           GET
 *  getContact(id)            '/api/contacts/:id'       GET
 *  searchContacts(query)     '/api/search'             GET
 *  checkEmail(email)         '/api/check-email'        GET
 *
 *  createContact(contact)    '/api/contacts/:id'       PUT
 *  updateContact(contact)    '/api/contacts'           POST
 *  deleteContact(id)         '/api/contacts/:id'       DELETE
 *
 */

const PATH_API_HTML = './contacts-server.html';

const fs = require('fs');
const url = require('url');
const db = require('./data/contacts');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

let unorderedResponse = process.argv.includes('--unordered-response');
if (unorderedResponse) {
  console.log('Serving search results unordered')
}

let maxId = db.length;

const multipleResponse = (items) => { return { items: items } };
const singleResponse = (item) => { return { item: item } };
const getNextId = () => { return maxId++ };
const isContact = (contact) => contact.name !== undefined;
const emailIsAvailable = (email) => {
  if (email === '') {
    return true;
  }
  let contact = db.find(contact => contact.email == email);
  return contact ? false : true;
}

// ******************************************************************
// REST Server
// ******************************************************************

let app = express();
    app.use(cors());
    app.use(bodyParser.json());


/**
 * Redirect 'null' path to get all contacts
 */
app.get('/', (req, res) =>{
  let file = require.resolve(PATH_API_HTML);
  res.send( fs.readFileSync(file).toString() )
});

// ******************************************************************
// REST API
// ******************************************************************

/**
 * getContacts() RESTful endpoint
 */
app.get('/api/contacts', function (req, res) {
  res.json(multipleResponse(db));
});

let delayedRequest = false;

/**
 * searchContacts(<query>) RESTful endpoint
 */
app.get('/api/search', function (req, res) {
  let text = req.query.text;
  let matches = db.filter(contact => contact.name
    .toLowerCase().indexOf(text.toLowerCase()) > -1);

  if (unorderedResponse && delayedRequest) {
    console.log(`Serving delayed for: ${text}`);
    setTimeout(() => res.json(multipleResponse(matches)), 2000)
  } else {
    console.log(`Serving instantly for: ${text}`);
    res.json(multipleResponse(matches));
  }
  delayedRequest = !delayedRequest;
});

/**
 * getContact(<contactId>) RESTful endpoint
 */
app.get('/api/contacts/:id', function (req, res) {
  let contact = db.find(contact => contact.id == req.params.id);
  contact ? res.json(singleResponse(contact)) : res.status(404).json({ error: 'contact not found' });
});

/**
 * updateContact(<contact>) RESTful endpoint
 */
app.post('/api/contacts', function (req, res) {
  if (isContact(req.body)) {
    req.body.id = getNextId();
    req.body.image = '/assets/images/placeholder.png';
    db.push(req.body);
    res.json(singleResponse(req.body));
  }
  else {
    res.status(404).json({ error: 'invalid structure' });
  }
});


/**
 * createContact(<contact>) RESTful endpoint
 */
app.put('/api/contacts/:id', function (req, res) {
  let contact = db.find(contact => contact.id == req.params.id);
  if (contact) {
    Object.assign(contact, req.body);
    res.json(singleResponse(contact));
  } else {
    res.status(404).json({ error: 'contact not found' });
  }
});

/**
 * deleteContact(<contactId>) RESTful endpoint
 */
app.delete('/api/contacts/:id', function (req, res) {
  let contact = db.find(contact => contact.id == req.params.id);
  if (contact) {
    let index = db.indexOf(contact);
    db.splice(index, 1);
    res.json(singleResponse(contact));
  } else {
    res.status(404).json({ error: 'contact not found' });
  }
});

/**
 * checkEmail(<email>) RESTful endpoint
 */
app.get('/api/check-email', function (req, res) {
  if (emailIsAvailable(req.query.email)) {
    res.json({ msg: 'AVAILABLE' });
  } else {
    res.json({ error: 'NOT_AVAILABLE' });
  }
});

app.listen(4201, () => console.log('REST API running on port 4201'));


