var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./User.model')

var app = express();
var port = 8080;

var db = 'mongodb://localhost/example';
mongoose.connect(db);

app.get('/', function(req, res) {
  res.send("welcome")
});

// list all entries as json
app.get('/users', function(req, res) {
  User.find({}).
  exec(function(err, users) {
    if (err) {
      res.send("error has occurred");
    } else {
      console.log(users);
      res.json(users);
    }
  });
});


/*
  parameters: host:port/users/_id
  {http://127.0.0.1:8080/users/5a3686b21e1fbea3a1d730bd
  {"_id":"5a3686b21e1fbea3a1d730bd","username":"Rosanna","email":"rosanna@example.com","role":"user"}
*/
app.get('/users/:id', function(req, res) {
  console.log("GET: user")
  User.findOne({_id: req.params.id})
  .exec(function(err, user) {
    if(err) {
      res.send("error has occurred")
    } else {
      console.log(user);
      res.json(user);
    }

  })
})

app.listen(port, function() {
  console.log("app listening on port", port)
});
