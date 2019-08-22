require('dotenv').config({path: 'mysql.env'});
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySQL");
});

exports.getEmployees = function(callback) {
   db.query("SELECT emp_name from employee;",
   function(err, rows) {
     if (err) throw err;
     callback(rows);
   });
}

exports.inputEmployee = function(callback) {
  db.query("INSERT INTO employee ?, ?, ?, ?, ?, ?, ?;",
  function(err, rows) {
    if (err) throw err;
    callback(rows);
  });
}

exports.getEmployeesFromDepartment = function(callback) {
  db.query("SELECT employee.emp_id, employee.emp_name from employee JOIN department ON employee.emp_id=department.emp_id;",
  function(err, rows) {
    if (err) throw err;
    callback(rows);
  });
}

exports.addEmployee = function(data, readyFn){
  db.query('INSERT INTO employee SET ?', data,
  function(error, results, fields) {
      if (error) throw error;
      readyFn(results.insertId);

  });

exports.getDepartments = function(callback) {
  db.query("SELECT dep_name FROM department;",
    function(err, rows) {
      if (err) throw err;
      callback(rows);
    });
}
