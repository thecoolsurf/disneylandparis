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

/* ************************************************************************************************** */

function updateAttraction() {
  server.post("/admin/update/attraction", (req, res, next) => {
    let id = req.body.id;
    let sql = `UPDATE attraction SET 
    id_park = '${req.body.id_park}', 
    id_univ = '${req.body.id_univ}', 
    name = '${req.body.name}', 
    slug = '${req.body.slug}', 
    public = '${req.body.public}', 
    description = '${req.body.description}', 
    restriction = '${req.body.restriction}', 
    pictures = '${req.body.pictures}', 
    movies = '${req.body.movies}' 
    WHERE id = ${id}`;
    knex.raw(sql)
      .then(([rows, columns]) => {
        res.send(`Update ATTRACTION (${id})`);
      })
  });
  return server;
}

function updateUser() {
  server.post("/admin/update/user", (req, res, next) => {
    let id = req.body.id;
    let sql = `UPDATE user SET 
    firstname = '${req.body.firstname}', 
    lastname = '${req.body.lastname}', 
    email = '${req.body.email}', 
    password = '${req.body.password}' 
    WHERE id = ${id}`;
    knex.raw(sql)
      .then(([rows, columns]) => {
        res.send(`Update USER (${id})`);
      })
  });
  return server;
}

/* ************************************************************************************************** */
/* PUBLIC */

// navigation
const nav_attractions_univers_parks = require('./Model/Public/Navigation/AttractionsAndUniversAndParks.js');
select("/navigation", nav_attractions_univers_parks);
// page home
const home = require('./Model/Public/Home/Datas.js');
select("/home", home);
// page park
const park_by_id = require('./Model/Public/Park/ParkById.js');
selectWithId("/park_by_id", park_by_id);
// page univers
const univers_by_id = require('./Model/Public/Univers/UniversById.js');
selectWithId("/univers_by_id", univers_by_id);
const attractions_by_univers = require('./Model/Public/Attraction/AttractionsByUnivers.js');
selectWithId("/attractions_by_univers", attractions_by_univers);
// page attraction
const attraction_by_id = require('./Model/Public/Attraction/AttractionById.js');
selectWithId("/attraction_by_id", attraction_by_id);
// find attraction
const find_attraction_by_name = require('./Model/Public/Attraction/FindAttractionByName.js');
selectFind("/all_attractions", find_attraction_by_name);

/* ************************************************************************************************** */
/* ADMIN */

const attraction_collection = require('./Model/Admin/Attraction/AttractionCollection.js');
select("/admin/collection/attraction", attraction_collection);
const attraction_form = require('./Model/Admin/Attraction/AttractionById.js');
selectWithId("/admin/form/attraction", attraction_form);
// updateAttraction();

const park_collection = require('./Model/Admin/Park/ParkCollection.js');
select("/admin/collection/park", park_collection);
const park_form = require('./Model/Admin/Park/ParkById.js');
selectWithId("/admin/form/park", park_form);

const univers_collection = require('./Model/Admin/Univers/UniversCollection.js');
select("/admin/collection/univers", univers_collection);
const univers_form = require('./Model/Admin/Univers/UniversById.js');
selectWithId("/admin/form/univers", univers_form);

const user_collection = require('./Model/Admin/User/UserCollection.js');
select("/admin/collection/user", user_collection);
const user_form = require('./Model/Admin/User/UserById.js');
selectWithId("/admin/form/user", user_form);
updateUser();

const administrator_collection = require('./Model/Admin/Administrator/AdministratorCollection.js');
select("/admin/collection/administrator", administrator_collection);
const administrator_form = require('./Model/Admin/Administrator/AdministratorById.js');
selectWithId("/admin/form/administrator", administrator_form);



/* ************************************************************************************************** */

module.exports = server;