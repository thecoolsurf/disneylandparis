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
server.use(express.urlencoded({ extended: true }));


/* ************************************************************************************************** */

function jsonToArray(json) {
  let array = [];
  let values = Object.values(json);
  Array.prototype.push.apply(array, values);
  return array;
}

function select(route, sql) {
  server.get(route, (req, res, next) => {
    if (req.query.id) {
      let id = req.query.id;
      knex.raw(sql, id)
        .then(([rows, columns]) => {
          res.json(rows);
        })
    } else {
      knex.raw(sql)
        .then(([rows, columns]) => {
          res.json(rows);
        })
    }
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

function update(route, sql) {
  let entity = route.split('/')[3];
  server.post(route, (req, res, next) => {
    let datas = jsonToArray(req.body);
    knex.raw(sql, datas)
      .then(([rows, columns]) => {
        res.send(`Update: ${entity} (${req.body.id})`);
      })
  });
  return server;
}

/* ************************************************************************************************** */
/* PUBLIC */

const nav_attractions_univers_parks = require('./Model/Public/Navigation/AttractionsAndUniversAndParks.js');
select("/navigation", nav_attractions_univers_parks);

const home = require('./Model/Public/Home/Datas.js');
select("/home", home);

const park_by_id = require('./Model/Public/Park/ParkById.js');
select("/park_by_id", park_by_id);

const univers_by_id = require('./Model/Public/Univers/UniversById.js');
select("/univers_by_id", univers_by_id);

const attractions_by_univers = require('./Model/Public/Attraction/AttractionsByUnivers.js');
select("/attractions_by_univers", attractions_by_univers);

const attraction_by_id = require('./Model/Public/Attraction/AttractionById.js');
select("/attraction_by_id", attraction_by_id);

const find_attraction = require('./Model/Public/Attraction/FindAttraction.js');
selectFind("/find_attraction", find_attraction);

/* ************************************************************************************************** */
/* ADMIN */

const attraction_collection = require('./Model/Admin/Attraction/Collection.js');
select("/admin/collection/attraction", attraction_collection);
const attraction_form = require('./Model/Admin/Attraction/ById.js');
select("/admin/form/attraction", attraction_form);
const attraction_update = require('./Model/Admin/Attraction/Update.js');
update("/admin/update/attraction", attraction_update);

const park_collection = require('./Model/Admin/Park/Collection.js');
select("/admin/collection/park", park_collection);
const park_form = require('./Model/Admin/Park/ById.js');
select("/admin/form/park", park_form);
const park_update = require('./Model/Admin/Park/Update.js');
update('/admin/update/park', park_update);

const univers_collection = require('./Model/Admin/Univers/Collection.js');
select("/admin/collection/univers", univers_collection);
const univers_form = require('./Model/Admin/Univers/ById.js');
select("/admin/form/univers", univers_form);
const univers_update = require('./Model/Admin/Univers/Update.js');
update('/admin/update/univers', univers_update);

const user_collection = require('./Model/Admin/User/Collection.js');
select("/admin/collection/user", user_collection);
const user_form = require('./Model/Admin/User/ById.js');
select("/admin/form/user", user_form);
const user_update = require('./Model/Admin/User/Update.js')
update("/admin/update/user", user_update);

const administrator_collection = require('./Model/Admin/Administrator/Collection.js');
select("/admin/collection/administrator", administrator_collection);
const administrator_form = require('./Model/Admin/Administrator/ById.js');
select("/admin/form/administrator", administrator_form);
const administrator_update = require('./Model/Admin/Administrator/Update.js');
update('/admin/update/administrator', administrator_update);



/* ************************************************************************************************** */

module.exports = server;