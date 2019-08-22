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

exports.getCitiesInCountry = function(countrycode, callback) {
  db.query("SELECT id, name, countrycode, district, population"
  + " FROM city WHERE countrycode = ?",
  [countrycode],
  function(err, rows) {
    if (err) throw err;
    callback(rows);
  });
}

exports.addCity = function(data, readyFn) {
  db.query("INSERT INTO city SET ?", data,
    function(error, results, fields) {
        if (error) throw error;
        readyFn(results.insertId);
    });
}
