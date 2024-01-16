const morgan = require("morgan");
const cors = require('cors');
const config = require('./config');
const express = require("express");
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

/* ************************************************************************************************** */

function select(route, sql) {
  server.get(route, (req, res, next) => {
    let id = req.query.id;
    knex.raw(sql, id)
      .then(([rows, columns]) => {
        res.json(rows);
      })
  });
  return server;
}

function selectFind(route, sql) {
  server.get(route, (req, res, next) => {
    let find = req.query.find ? req.query.find : '';
    knex.raw(sql, '%' + find + '%')
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

function selectAdmin() {
  server.get("/admin/collection", (req, res, next) => {
    switch (req.query.uri) {
      case 'attraction':
        sql = require('./Model/Admin/Attraction/AttractionCollection.js');
      case 'park':
        sql = require('./Model/Admin/Park/ParkCollection.js');
      case 'univers':
        sql = require('./Model/Admin/Univers/UniversCollection.js');
      default:
        sql = require('./Model/Admin/Attraction/AttractionCollection.js');

    }
    knex.raw(sql)
      .then(([rows, columns]) => {
        const result = rows.map((e) => ({
          id: e.id,
          name: e.name
        }));
        res.json(result);
      })
  });
  return server;
}
/* ************************************************************************************************** */
/* NAVIGATION */

/* Park */
const nav_parks = require('./Model/Public/Park/AllParks.js');
select("/nav_parks", nav_parks);

/* Univers by park */
const nav_univers = require('./Model/Public/Univers/AllUniversByPark.js');
select("/nav_univers", nav_univers);

/* Attractions by park */
const attractions_by_univers = require('./Model/Public/Attraction/AllAttractionsByUnivers.js');
select("/nav_attractions", attractions_by_univers);

/* ************************************************************************************************** */
/* PUBLIC PAGES */

/* park by id */
const park_by_id = require('./Model/Public/Park/ParkById.js');
select("/park_by_id", park_by_id);

/* Univers by id */
const univers_by_id = require('./Model/Public/Univers/UniversById.js');
select("/univers_by_id", univers_by_id);

/* Attractions by univers */
const all_attractions_by_univers = require('./Model/Public/Attraction/AllAttractionsByUnivers.js');
select("/attractions_by_univers", all_attractions_by_univers);

/* Attraction by ID */
const attraction_by_id = require('./Model/Public/Attraction/AttractionById.js');
select("/attraction_by_id", attraction_by_id);

/* Find attractions */
const find_attraction_by_name = require('./Model/Public/Attraction/FindAttractionByName.js');
selectFind("/all_attractions", find_attraction_by_name);

/* ************************************************************************************************** */
/* ADMIN COLLECTIONS */

selectAdmin();

module.exports = server;