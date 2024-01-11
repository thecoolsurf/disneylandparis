const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const config = require('./config');
const server = express();

const knex = require('knex')({
  client: 'mysql2',
  connection: config.db
});

const options = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200
}

server.use(morgan("common"));
server.use(cors(options));

function select(route,sql) {
  server.get(route, (req, res, next) => {
    let id = req.query.id;
    knex.raw(sql,id)
      .then(([rows, columns]) => {
        res.json(rows);
      })
  });
  return server;
}

/* ************************************************************************************************** */
/*
Navigation Parks
*/
sql = `SELECT 
id, name, slug, description 
FROM park`;

select("/nav_parks",sql);

/* ************************************************************************************************** */
/*
Navigation Univers by park
*/
sql = `SELECT 
u.id, u.name, u.slug, p.slug AS pslug, p.name AS pname 
FROM univers AS u 
JOIN park AS p ON p.id = u.id_park AND p.id = ? 
ORDER BY u.name`;

select("/nav_univers",sql);

/* ************************************************************************************************** */
/*
Navigation Attractions by park
*/
sql = `SELECT 
p.slug AS pslug, p.name AS pname, u.slug AS uslug, u.name AS uname, a.slug, a.id, a.name, a.description, a.restriction 
FROM attraction a 
JOIN univers u ON u.id = a.id_univ 
JOIN park p ON p.id = u.id_park 
WHERE p.id = ?`;

select("/nav_attractions",sql);

/* ************************************************************************************************** */
/*
Page Parks - park by id
*/
sql = `SELECT 
p.slug , p.name, p.description 
FROM park p 
WHERE p.id = ?`;

select("/park_by_id",sql);

/* ************************************************************************************************** */
/*
Page Univers - univers by id - attractions by univers
*/
sql = `SELECT 
slug, name, description 
FROM univers 
WHERE id = ?`;

select("/univers_by_id",sql);

sql = `SELECT 
id, id_park, slug, name, pictures 
FROM attraction 
WHERE id_univ = ?`;

select("/attractions_by_univers",sql);

/* ************************************************************************************************** */
/*
Page Attraction - attraction by ID
*/
sql = `SELECT 
slug, name, public, description, restriction, pictures, movies 
FROM attraction 
WHERE id = ?`;

select("/attraction_by_id",sql);

/* ************************************************************************************************** */
/*
Page Find attractions
*/
function findAttraction(route) {
  server.get(route, (req, res, next) => {
    let find = req.query.find ? req.query.find : '';
    let sql = `SELECT 
    p.slug AS pslug, u.slug AS uslug, a.slug, a.name 
    FROM attraction a 
    JOIN park p ON p.id = a.id_park 
    JOIN univers u ON u.id = a.id_univ 
    AND a.name LIKE '%${find}%' 
    LIMIT 5`;
    knex.raw(sql)
      .then(([rows, columns]) => {
        const result = rows.map((e) => ({
          pslug: e.pslug,
          uslug: e.uslug,
          slug: e.slug,
          name: e.name
        }));
        res.json(result);
      })
  });
  return server;
}
findAttraction("/all_attractions");

/* ************************************************************************************************** */

module.exports = server;