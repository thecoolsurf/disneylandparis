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

function select(route, sql) {
  server.get(route, (req, res, next) => {
    knex.raw(sql)
      .then(([rows, columns]) => {
        res.json(rows);
      })
  });
  return server;
}

function selectWithId(route, sql) {
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

function update(route,sql) {
  server.post(route, (req, res, next) => {
    let id = req.body.id;
    let datas = [req.body.firstname, req.body.lastname, req.body.email, req.body.password, id]
    knex.raw(sql,datas)
      .then(([rows, columns]) => {
        res.send(`Update USER (${id})`);
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
selectWithId("/park_by_id", park_by_id);

const univers_by_id = require('./Model/Public/Univers/UniversById.js');
selectWithId("/univers_by_id", univers_by_id);

const attractions_by_univers = require('./Model/Public/Attraction/AttractionsByUnivers.js');
selectWithId("/attractions_by_univers", attractions_by_univers);

const attraction_by_id = require('./Model/Public/Attraction/AttractionById.js');
selectWithId("/attraction_by_id", attraction_by_id);

const find_attraction_by_name = require('./Model/Public/Attraction/FindAttractionByName.js');
selectFind("/all_attractions", find_attraction_by_name);

/* ************************************************************************************************** */
/* ADMIN */

const attraction_collection = require('./Model/Admin/Attraction/Collection.js');
select("/admin/collection/attraction", attraction_collection);
const attraction_form = require('./Model/Admin/Attraction/ById.js');
selectWithId("/admin/form/attraction", attraction_form);

const park_collection = require('./Model/Admin/Park/Collection.js');
select("/admin/collection/park", park_collection);
const park_form = require('./Model/Admin/Park/ById.js');
selectWithId("/admin/form/park", park_form);

const univers_collection = require('./Model/Admin/Univers/Collection.js');
select("/admin/collection/univers", univers_collection);
const univers_form = require('./Model/Admin/Univers/ById.js');
selectWithId("/admin/form/univers", univers_form);

const user_collection = require('./Model/Admin/User/Collection.js');
select("/admin/collection/user", user_collection);
const user_form = require('./Model/Admin/User/ById.js');
selectWithId("/admin/form/user", user_form);
const user_update = require('./Model/Admin/User/Update.js')
update("/admin/update/user",user_update);

const administrator_collection = require('./Model/Admin/Administrator/Collection.js');
select("/admin/collection/administrator", administrator_collection);
const administrator_form = require('./Model/Admin/Administrator/ById.js');
selectWithId("/admin/form/administrator", administrator_form);



/* ************************************************************************************************** */

module.exports = server;