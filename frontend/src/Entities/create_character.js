/* ******************************************************** */
/* NODEJS */

var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  port: 8080,
  user: 'root',
  database: 'disneylandparis',
  password: 'db-btf5q'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE character (id INT(8), name VARCHAR(255), slug VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });