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

/* ************************************************************************************************** */
/*
Navigation Parks
*/
function selectAllParks(route) {
  server.get(route, (req, res, next) => {
    let sql = `SELECT 
    id, name, slug, description 
    FROM park`;
    knex.raw(sql)
      .then(([rows, columns]) => {
        const result = rows.map((e) => ({
          id: e.id,
          name: e.name,
          slug: e.slug,
          description: e.description
        }));
        res.json(result);
      })
  });
  return server;
}
selectAllParks("/nav_parks");

/* ************************************************************************************************** */
/*
Navigation Univers by park
*/
function selectUniversByPark(route) {
  server.get(route, (req, res, next) => {
    let id = req.query.id;
    let sql = `SELECT 
    u.id, u.name, u.slug, p.slug AS pslug, p.name AS pname 
    FROM univers AS u 
    JOIN park AS p ON p.id = u.id_park AND p.id = ? 
    ORDER BY u.name`;
    knex.raw(sql, id)
      .then(([rows, columns]) => {
        const result = rows.map((e) => ({
          id: e.id,
          name: e.name,
          slug: e.slug,
          pname: e.pname,
          pslug: e.pslug
        }));
        res.json(result);
      })
  });
  return server;
}
selectUniversByPark("/nav_univers");

/* ************************************************************************************************** */
/*
Navigation Attractions by park
*/
function selectAttractionsByPark(route) {
  server.get(route, (req, res, next) => {
    let sql = `SELECT 
    p.slug AS pslug, p.name AS pname, u.slug AS uslug, u.name AS uname, a.slug, a.id, a.name, a.description, a.restriction 
    FROM attraction a 
    JOIN univers u ON u.id = a.id_univ 
    JOIN park p ON p.id = u.id_park 
    WHERE p.id = ?`;
    knex.raw(sql, req.query.id)
      .then(([rows, columns]) => {
        const result = rows.map((e) => ({
          id: e.id,
          name: e.name,
          slug: e.slug,
          pname: e.pname,
          pslug: e.pslug,
          uslug: e.uslug,
          uname: e.uname
        }));
        res.json(result);
      })
  });
  return server;
}
selectAttractionsByPark("/nav_attractions");

/* ************************************************************************************************** */
/*
Page Parks - park by id
*/
function selectParkById(route) {
  server.get(route, (req, res, next) => {
    let sql = `SELECT 
    p.slug , p.name, p.description 
    FROM park p 
    WHERE p.id = ?`;
    knex.raw(sql, req.query.id)
      .then(([rows, columns]) => {
        const result = rows.map((e) => ({
          slug: e.slug,
          name: e.name,
          description: e.description
        }));
        res.json(result);
      })
  });
  return server;
}
selectParkById("/park_by_id");

/* ************************************************************************************************** */
/*
Page Univers - univers by id - attractions by univers
*/
function selectUniversById(route) {
  server.get(route, (req, res, next) => {
    let sql = `SELECT 
    slug, name, description 
    FROM univers 
    WHERE id = ?`;
    knex.raw(sql, req.query.id)
      .then(([rows, columns]) => {
        const result = rows.map((e) => ({
          slug: e.slug,
          name: e.name,
          description: e.description
        }));
        res.json(result);
      })
  });
  return server;
}
function selectAttractionsByUnivers(route) {
  server.get(route, (req, res, next) => {
    let sql = `SELECT 
    id, id_park, slug, name, pictures 
    FROM attraction 
    WHERE id_univ = ?`;
    knex.raw(sql, req.query.id)
      .then(([rows, columns]) => {
        const result = rows.map((e) => ({
          id: e.id,
          id_park: e.id_park,
          slug: e.slug,
          name: e.name,
          pictures: e.pictures
        }));
        res.json(result);
      })
  });
  return server;
}
selectUniversById("/univers_by_id");
selectAttractionsByUnivers("/attractions_by_univers");

/* ************************************************************************************************** */
/*
Page Attraction - attraction by ID
*/
function selectAttractionById(route) {
  server.get(route, (req, res, next) => {
    let sql = `SELECT 
    slug, name, public, description, restriction, pictures, movies 
    FROM attraction 
    WHERE id = ?`;
    knex.raw(sql, req.query.id)
      .then(([rows, columns]) => {
        const result = rows.map((e) => ({
          slug: e.slug,
          name: e.name,
          public: e.public,
          description: e.description,
          restriction: e.restriction,
          pictures: e.pictures,
          movies: e.movies
        }));
        res.json(result);
      })
  });
  return server;
}
selectAttractionById("/attraction_by_id");

/* ************************************************************************************************** */
/*
Page Find attractions
*/
function selectFindAttraction(route) {
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
selectFindAttraction("/all_attractions");

/* ************************************************************************************************** */

module.exports = server;