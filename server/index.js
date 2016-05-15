var db = require('./data/contacts');
var bodyParser = require('body-parser');
var express = require('express');
var cors = require('cors');

var multipleResponse = (items) => { return { items: items } };
var singleResponse = (item) => { return { item: item } };
var getNextId = () => db.length;

var isContact = (contact) => contact.name !== undefined;

var getNextId = () => db.length;

var emailIsAvailable = (email) => {
  var contact = db.find(contact => contact.email == email);
  return contact ? false : true;
}

var app = express();

app.use(cors());
app.use(bodyParser.json()); 

app.get('/api/contacts', function (req, res) {
  res.json(multipleResponse(db));
});

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

app.get('/api/search', function (req, res) {
  var text = req.query.text;
  var matches = db.filter(contact => contact.name
    .toLowerCase().indexOf(text.toLowerCase()) > -1);

  res.json(multipleResponse(matches));
});

app.get('/api/contacts/:id', function (req, res) {
  var contact = db.find(contact => contact.id == req.params.id);
  contact ? res.json(singleResponse(contact)) : res.status(404).json({ error: 'contact not found' });
});

app.put('/api/contacts/:id', function (req, res) {
  var contact = db.find(contact => contact.id == req.params.id);
  if (contact) {
    Object.assign(contact, req.body);
    res.json(singleResponse(contact));
  } else {
    res.status(404).json({ error: 'contact not found' });
  }
});

app.get('/api/check-email', function (req, res) {
  if (emailIsAvailable(req.query.email)) {
    res.json({ msg: 'AVAILABLE' });
  } else {
    res.json({ error: 'NOT_AVAILABLE' });
  }
});

app.listen(4201, () => console.log('REST API running on port 4201'));
