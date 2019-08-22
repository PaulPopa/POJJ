const express = require('express');
const app = express();

app.use(express.json());

employees = [];
departments = [];
departmentEmployees = [];

app.get('/employees', function(req, res) {
  updateEmployees(function() {
    res.send(employees);
  });
});

app.post('/addEmployee', function(req, res) {
  db.addEmployee(req.body, function(insertedKey){
      updateEmployees(function(){
          res.send(employees);
      })
  })
});

app.get('/departmentemployees', function(req, res) {
  updateEmployees(function() {
    res.send(departmentEmployees);
  });
});

app.get('/departments', function(req, res) {
  updateEmployees(function() {
    res.send(departmentEmployees);
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

function updateDepartments(departmentsReadyFn) {
  db.getDepartments(function(rows) {
    departments = rows;
    departmentsReadyFn();
  });
}
