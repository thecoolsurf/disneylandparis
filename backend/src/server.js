/* ******************************************************** */
/* IT WORKS */

const mod_express = require("express");
const mod_morgan = require("morgan");
const database = require("./database");
const query = mod_express();

// function select(table,attributes) {
//   let request = `SELECT ${attributes} FROM ${table};`
//   query.use(mod_morgan("common"));
//   query.get("/", (req, res, next) => {
//     database.raw(request)
//       .then(([rows, columns]) => rows[0])
//       .then((row) => res.json({
//         id: row.id,
//         name: row.name,
//         url: row.url
//       }))
//       .catch(next);
//   });
//   return query;
// }

function select(table, attributes) {
  let request = `SELECT ${attributes} FROM ${table};`;
  let result = [];
  query.use(mod_morgan("common"));
  query.get("/", (req, res, next) => {
    database.raw(request)
      .then(([rows, columns]) => rows.map((el => {
        console.log('id',el.id);
        result.push(res.json({
          id: el.id,
          name: el.name,
          url: el.url
        }))
      })))
      .catch(next);
  });
  return query;
}

module.exports = select('park', '*');

/* ******************************************************** */
