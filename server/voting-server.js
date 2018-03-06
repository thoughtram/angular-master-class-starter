let bodyParser = require('body-parser');
let express = require('express');
let cors = require('cors');

const delay = 200;
let votes = 0;
let app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/api/votes', getAllVotes);
app.get('/api/votes/increment', addVote);
app.get('/api/votes/decrement', removeVote);

app.listen(4201, () => console.log('REST API running on port 4201'));


//  *************************************************
//  Internal REST methods
//  *************************************************

function getAllVotes(req, res) {
  setTimeout(() => res.json({votes}), delay);
}

function addVote(req, res) {
  setTimeout(() => {
    votes += 1;
    res.json({votes});
  }, delay);
}

function removeVote(req, res) {
  setTimeout(() => {
    votes -= 1;
    res.json({votes});
  }, delay);
}

