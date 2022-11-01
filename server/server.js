const express = require('express');
const cors = require("cors");
var app = express();
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var MongoClient = require('mongodb').MongoClient;


app.get('/', (reg, res) => {
  MongoClient.connect('mongodb://localhost', function (err, client) {
    if (err) throw err;
    var db = client.db('teste');
    db.collection('pessoa').findOne({ nome: 'josé' }, function (findErr, result) {
      if (findErr) throw findErr;
      res.send(result);
      console.log(result);
      client.close();
    });
  });
});

app.get('/all', (reg, res) => {
  MongoClient.connect('mongodb://localhost', (err, client) => {
    if (err) throw err
    var db = client.db('teste');
    db.collection('pessoa').find().toArray((err, result) => {
      if (err) throw err
      res.send(result);
      console.log(result);
      client.close();
    })
  })
});

app.post('/inserir', (reg, res) => {
  MongoClient.connect('mongodb://localhost', function (err, client) {
    if (err) throw err;
    var db = client.db('teste');
    db.collection("pessoa").insertOne(reg.body, function (err, result) {
      if (err) throw err;
      res.send(result);
      console.log("1 document inserted");
     client.close();
    });
  });
});

let port = process.env.PORT || 3000;
app.listen(port, (reg, res) => {
  console.log('Servidor Rodando');
});

