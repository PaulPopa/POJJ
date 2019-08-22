const express = require('express');
const app = express();

app.use(express.json());

employees = [];

app.get('/employees', function(req, res) {
  updateEmployees(function() {
    res.send(employees);
    console.log(employees);
  });
});

app.listen(8002, function() {
  console.log('World API listening on port 8002');
});

const db = require('./db.js');

function updateEmployees(employeesReadyFn) {
  db.getEmployees(function(rows) {
    employees = rows;
    employeesReadyFn();
  });
}
