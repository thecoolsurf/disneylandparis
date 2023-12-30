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

function select() {

  /*
  Navigation
  Query Park Disneyland and WaltDisney Studios
  */
  server.get("/nav_parks", (req, res, next) => {
    let sqlNavParks = 'SELECT id, name, slug, description FROM park';
    database.raw(sqlNavParks)
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

  /*
  Navigation
  Query Menus Univers Park Disneyland
  */
  server.get("/nav_univers_park", (req, res, next) => {
    let id = 1;
    let sqlNavUniversPark = `SELECT u.id, u.name, u.slug, p.slug AS pslug, p.name AS pname FROM univers AS u JOIN park AS p ON p.id = u.id_park AND p.id = ${id} ORDER BY u.name`;
    database.raw(sqlNavUniversPark)
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

  /*
  Navigation
  Query Menus Univers Walt Disney Studio
  */
  server.get("/nav_univers_studio", (req, res, next) => {
    let id = 2;
    let sqlNavUniversStudio = `SELECT u.id, u.name, u.slug, p.slug AS pslug, p.name AS pname FROM univers AS u JOIN park AS p ON p.id = u.id_park AND p.id = ${id} ORDER BY u.name`;
    database.raw(sqlNavUniversStudio)
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

  /* ************************************************************************************************** */
  
  /*
  Page Park
  Query park by ID
  */
  server.get("/park_by_id", (req, res, next) => {
    // let id = req.query.id;
    let id = 1;
    let sqlParkById = `SELECT slug, name, description FROM park WHERE id = ${id}`;
    database.raw(sqlParkById)
      .then(([rows, columns]) => {
        const result = rows.map((el) => ({
          slug: el.slug,
          name: el.name,
          description: el.description
        }));
        res.json(result);
      })
  });

  /*
  Page Univers
  Query Univers by ID
  */
  server.get("/univers_by_id", (req, res, next) => {
    let id = req.query.id;
    let sqlUniversById = `SELECT slug, name, description FROM univers WHERE id = ${id}`;
    database.raw(sqlUniversById)
      .then(([rows, columns]) => {
        const result = rows.map((el) => ({
          slug: el.slug,
          name: el.name,
          description: el.description
        }));
        res.json(result);
      })
  });

  /*
  Page Univers
  Query Attractions by Univers
  */
  server.get("/attractions_by_univers", (req, res, next) => {
    let id = req.query.id;
    let sqlAttractionsByUnivers = `SELECT id, slug, name, pictures FROM attraction WHERE id_univ = ${id}`;
    database.raw(sqlAttractionsByUnivers)
      .then(([rows, columns]) => {
        const result = rows.map((el) => ({
          id: el.id,
          slug: el.slug,
          name: el.name,
          pictures: el.pictures
        }));
        res.json(result);
      })
  });

  return server;
}
module.exports = select();