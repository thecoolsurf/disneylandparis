const express = require("express");
const morgan = require("morgan");
const database = require("./database");
const server = express();
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200
}
server.use(morgan("common"));
server.use(cors(corsOptions));

/* ************************************************************************************************** */
/*
Navigation Parks
*/
function selectAllParks(server, route) {
  let sql = `SELECT 
  id, name, slug, description 
  FROM park`;
  server.get(route, (req, res, next) => {
    database.raw(sql)
      .then(([rows, columns]) => {
        const result = rows.map((el) => ({
          id: el.id,
          name: el.name,
          slug: el.slug,
          description: el.description
        }));
        res.json(result);
      })
  });
  return server;
}
selectAllParks(server, "/nav_parks");

/* ************************************************************************************************** */
/*
Navigation Univers by park
*/
function selectUniversByPark(server, route) {
  server.get(route, (req, res, next) => {
    let id = req.query.id;
    let sql = `SELECT 
    u.id, u.name, u.slug, p.slug AS pslug, p.name AS pname 
    FROM univers AS u 
    JOIN park AS p ON p.id = u.id_park AND p.id = ${id} 
    ORDER BY u.name`;
    database.raw(sql)
      .then(([rows, columns]) => {
        const result = rows.map((el) => ({
          id: el.id,
          name: el.name,
          slug: el.slug,
          pname: el.pname,
          pslug: el.pslug
        }));
        res.json(result);
      })
  });
  return server;
}
selectUniversByPark(server, "/nav_univers");

/* ************************************************************************************************** */
/*
Navigation Attractions by park
*/
function selectAttractionsByPark(server, route) {
  server.get(route, (req, res, next) => {
    let id = req.query.id;
    let sql = `SELECT 
    p.slug AS pslug, p.name AS pname, u.slug AS uslug, u.name AS uname, a.slug, a.id, a.name, a.description, a.restriction 
    FROM attraction a 
    JOIN univers u ON u.id = a.id_univ 
    JOIN park p ON p.id = u.id_park 
    WHERE p.id = ${id}`;
    database.raw(sql)
      .then(([rows, columns]) => {
        const result = rows.map((el) => ({
          id: el.id,
          name: el.name,
          slug: el.slug,
          pname: el.pname,
          pslug: el.pslug,
          uslug: el.uslug,
          uname: el.uname
        }));
        res.json(result);
      })
  });
  return server;
}
selectAttractionsByPark(server, "/nav_attractions");

/* ************************************************************************************************** */
/*
Page Parks - park by id
*/
function selectParkById(server, route) {
  server.get(route, (req, res, next) => {
    let id = req.query.id;
    let sql = `SELECT 
    p.slug , p.name, p.description 
    FROM park p 
    WHERE p.id = ${id}`;
    database.raw(sql)
      .then(([rows, columns]) => {
        const result = rows.map((el) => ({
          slug: el.slug,
          name: el.name,
          description: el.description
        }));
        res.json(result);
      })
  });
  return server;
}
selectParkById(server,"/park_by_id");

/* ************************************************************************************************** */
/*
Page Univers - univers by id - attractions by univers
*/
function selectUniversById(server, route) {
  server.get(route, (req, res, next) => {
    let id = req.query.id;
    let sql = `SELECT 
    slug, name, description 
    FROM univers 
    WHERE id = ${id}`;
    database.raw(sql)
      .then(([rows, columns]) => {
        const result = rows.map((el) => ({
          slug: el.slug,
          name: el.name,
          description: el.description
        }));
        res.json(result);
      })
  });
  return server;  
}
function selectAttractionsByUnivers(server, route) {
  server.get(route, (req, res, next) => {
    let id = req.query.id;
    let sql = `SELECT 
    id, id_park, slug, name, pictures 
    FROM attraction 
    WHERE id_univ = ${id}`;
    database.raw(sql)
      .then(([rows, columns]) => {
        const result = rows.map((el) => ({
          id: el.id,
          id_park: el.id_park,
          slug: el.slug,
          name: el.name,
          pictures: el.pictures
        }));
        res.json(result);
      })
  });
  return server;  
}
selectUniversById(server,"/univers_by_id");
selectAttractionsByUnivers(server,"/attractions_by_univers");

/* ************************************************************************************************** */
/*
Page Attraction - attraction by ID
*/
function selectAttractionById(server, route) {
  server.get(route, (req, res, next) => {
    let id = req.query.id;
    let sql = `SELECT 
    slug, name, public, description, restriction, pictures, movies 
    FROM attraction 
    WHERE id = ${id}`;
    database.raw(sql)
      .then(([rows, columns]) => {
        const result = rows.map((el) => ({
          slug: el.slug,
          name: el.name,
          public: el.public,
          description: el.description,
          restriction: el.restriction,
          pictures: el.pictures,
          movies: el.movies
        }));
        res.json(result);
      })
  });
  return server;  
}
selectAttractionById(server,"/attraction_by_id");

/* ************************************************************************************************** */
/*
Page Find attractions
*/
function selectFindAttraction(server, route) {
  server.get(route, (req, res, next) => {
    let find = req.query.find ? req.query.find : '';
    let sql = `SELECT 
    p.slug AS pslug, u.slug AS uslug, a.slug, a.name 
    FROM attraction a 
    JOIN park p ON p.id = a.id_park 
    JOIN univers u ON u.id = a.id_univ 
    AND a.name LIKE '%${find}%' 
    LIMIT 5`;
    database.raw(sql)
      .then(([rows, columns]) => {
        const result = rows.map((el) => ({
          pslug: el.pslug,
          uslug: el.uslug,
          slug: el.slug,
          name: el.name
        }));
        res.json(result);
      })
  });
  return server;  
}
selectFindAttraction(server,"/all_attractions");

/* ************************************************************************************************** */


module.exports = server;