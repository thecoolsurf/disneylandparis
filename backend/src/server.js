const morgan = require("morgan");
const cors = require('cors');
const config = require('./config');
const express = require("express");
const server = express();
const bcrypt = require("bcrypt");

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

function escape(s) {
  return ('' + s)
      .replace(/\\/g, '\\\\')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\u00A0/g, '\\u00A0')
      .replace(/&/g, '\\x26')
      .replace(/'/g, '\\x27')
      .replace(/"/g, '\\x22')
      .replace(/</g, '\\x3C')
      .replace(/>/g, '\\x3E');
}

function jsonToArray(json) {
  let array = [];
  // transform json to array
  let values = Object.values(json);
  // for each apply push in array
  Array.prototype.push.apply(array, values);
  return array;
}

function login(route, sql) {
  server.post(route, (req, res, next) => {
    let datas = jsonToArray(req.body);
    knex.raw(sql, datas)
      .then(([rows, columns]) => {
        const result = rows.map((e) => ({
          lastname: e.lastname,
          firstname: e.firstname,
        }));
        res.json(result);
      })
  });
  return server;
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
  let datas = [];
  server.post(route, async (req, res, next) => {
    let token = (req.body.password) ? await bcrypt.hash(req.body.password, 10) : '';
    if (entity === 'attraction') {
      datas.push(req.body.id_park);
      datas.push(req.body.id_univ);
      datas.push(req.body.name);
      datas.push(req.body.slug);
      datas.push(req.body.public);
      datas.push(req.body.id_evacuation);
      datas.push(req.body.id_height);
      datas.push(req.body.id_sensory);
      datas.push(req.body.handicaps.toString());
      datas.push(req.body.interests.toString());
      datas.push(req.body.description.replace(`'`,`ʼ`));
      datas.push(req.body.pictures.toString());
      datas.push(req.body.movies.toString());
      datas.push(req.body.id);
    } else {
      datas = jsonToArray(req.body);
    }
    knex.raw(sql, datas)
      .then(([rows, columns]) => {
        res.send(`Update: ${entity} (${req.body.id} ${token})`);
      })
  });
  return server;
}

function insert(route, sql) {
  let entity = route.split('/')[3];
  server.post(route, (req, res, next) => {
    let datas = jsonToArray(req.body);
    datas.pop(); // for id
    knex.raw(sql, datas)
      .then(([rows, columns]) => {
        res.send(`Insert: ${entity}`);
      })
  });
  return server;
}

function deleting(route, sql) {
  let entity = route.split('/')[3];
  server.post(route, (req, res, next) => {
    let id = req.body.id;
    knex.raw(sql, id)
      .then(([rows, columns]) => {
        res.send(`Delete: ${entity} (${id})`);
      })
  });
  return server;
}

/* ************************************************************************************************** */
/* PUBLIC */

/* menus */
const nav_attractions_univers_parks = require('./Model/Public/Navigation/AttractionsAndUniversAndParks.js');
select("/navigation", nav_attractions_univers_parks);

/* home page */
const home = require('./Model/Public/Home/Datas.js');
select("/home", home);

/* park page */
const park_by_id = require('./Model/Public/Park/ParkById.js');
select("/park_by_id", park_by_id);

/* univers page */
const univers_by_id = require('./Model/Public/Univers/UniversById.js');
select("/univers_by_id", univers_by_id);
const attractions_by_univers = require('./Model/Public/Attraction/AttractionsByUnivers.js');
select("/attractions_by_univers", attractions_by_univers);

/* attraction page */
const attraction_by_id = require('./Model/Public/Attraction/AttractionById.js');
select("/attraction_by_id", attraction_by_id);

/* find attraction page */
const find_attraction = require('./Model/Public/Attraction/FindAttraction.js');
selectFind("/find_attraction", find_attraction);

/* ************************************************************************************************** */
/* ADMIN */

const entities = ['administrator','attraction','evacuation','handicap','height','interest','park','sensory','univers','user'];

for (const entity of entities) {
  const folder = entity.charAt(0).toUpperCase()+entity.slice(1,entity.length);
  select(`/admin/collection/${entity}`, require(`./Model/Admin/${folder}/Collection.js`));
  select(`/admin/form/${entity}`, require(`./Model/Admin/${folder}/ById.js`));
  update(`/admin/update/${entity}`, require(`./Model/Admin/${folder}/Update.js`));
  insert(`/admin/insert/${entity}`, require(`./Model/Admin/${folder}/Insert.js`));
  deleting(`/admin/delete/${entity}`, require(`./Model/Admin/${folder}/Delete.js`));
}

login("/admin/connexion", require('./Model/Admin/Administrator/Connexion.js'));

/* ************************************************************************************************** */

module.exports = server;