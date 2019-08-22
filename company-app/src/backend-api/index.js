const express = require('express');
const app = express();

app.use(express.json());

cities = [];

app.post('/addcity', function(req, res) {
  db.addCity(req.body, function(insertedKey) {
    updateCities(function() {
      res.send(cities);
    });
  });
});

app.get('/cities', function(req, res) {
  updateCities(function() {
    res.send(cities);
  });
});

app.listen(8002, function() {
  console.log('World API listening on port 8002');
});

const db = require('./db.js');

function updateCities(citiesReadyFn) {
  db.getCitiesInCountry('IRL', function(rows) {
    cities = rows;
    citiesReadyFn();
  });
}
