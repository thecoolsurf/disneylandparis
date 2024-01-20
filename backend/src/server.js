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

function update(route, sql) {
  server.post(route, (req, res, next) => {
    let datas = req.body;
    console.log(datas);
    knex.raw(sql, datas)
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

/* ************************************************************************************************** */
/* PUBLIC PAGES */

const nav_attractions_univers_parks = require('./Model/Public/Navigation/AttractionsAndUniversAndParks.js');
select("/navigation", nav_attractions_univers_parks);

const home = require('./Model/Public/Home/Datas.js');
select("/home", home);

const park_by_id = require('./Model/Public/Park/ParkById.js');
selectWithId("/park_by_id", park_by_id);

const univers_by_id = require('./Model/Public/Univers/UniversById.js');
selectWithId("/univers_by_id", univers_by_id);

const all_attractions_by_univers = require('./Model/Public/Attraction/AllAttractionsByUniversAndPark.js');
selectWithId("/attractions_by_univers", all_attractions_by_univers);

const attraction_by_id = require('./Model/Public/Attraction/AttractionById.js');
selectWithId("/attraction_by_id", attraction_by_id);

const find_attraction_by_name = require('./Model/Public/Attraction/FindAttractionByName.js');
selectFind("/all_attractions", find_attraction_by_name);

/* ************************************************************************************************** */
/* ADMIN COLLECTIONS */

const attraction_collection = require('./Model/Admin/Attraction/AttractionCollection.js');
selectWithId("/admin/collection/attraction", attraction_collection);
const attraction_update = require('./Model/Admin/Attraction/AttractionById.js');
selectWithId("/admin/update/attraction", attraction_update);

const park_collection = require('./Model/Admin/Park/ParkCollection.js');
selectWithId("/admin/collection/park", park_collection);
const park_update = require('./Model/Admin/Park/ParkById.js');
selectWithId("/admin/update/park", park_update);

const univers_collection = require('./Model/Admin/Univers/UniversCollection.js');
selectWithId("/admin/collection/univers", univers_collection);
const univers_update = require('./Model/Admin/Univers/UniversById.js');
selectWithId("/admin/update/univers", univers_update);

const user_collection = require('./Model/Admin/User/UserCollection.js');
selectWithId("/admin/collection/user", user_collection);
const user_update = require('./Model/Admin/User/UserById.js');
selectWithId("/admin/update/user", user_update);

const administrator_collection = require('./Model/Admin/Admin/AdministratorCollection.js');
selectWithId("/admin/collection/admin", administrator_collection);
const administrator_update = require('./Model/Admin/Admin/AdministratorById.js');
selectWithId("/admin/collection/admin", administrator_update);



const attraction_update_entity = require('./Model/Admin/Attraction/AttractionUpdate.js');
update("/admin/update/entity/attraction", attraction_update_entity);

/* ************************************************************************************************** */

module.exports = server;