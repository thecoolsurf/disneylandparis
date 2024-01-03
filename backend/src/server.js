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
  Park Disneyland
  Park WaltDisney Studios
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
  Univers Park Disneyland
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
  Univers Walt Disney Studio
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

  /*
  Navigation
  Attractions Park Disneyland
  */
  server.get("/nav_attractions_park", (req, res, next) => {
    let id = 1;
    let sqlNavAttractionsPark = `SELECT p.slug AS pslug, p.name AS pname, u.slug AS uslug, u.name AS uname, a.slug, a.id, a.name, a.description, a.restriction FROM attraction a JOIN univers u ON u.id = a.id_univ JOIN park p ON p.id = u.id_park WHERE p.id = ${id}`;
    database.raw(sqlNavAttractionsPark)
      .then(([rows, columns]) => {
        const result = rows.map((el) => ({
          id: el.id,
          name: el.name,
          slug: el.slug,
          uname: el.uname,
          uslug: el.uslug,
          pname: el.pname,
          pslug: el.pslug
        }));
        res.json(result);
      })
  });

  /*
  Navigation
  Attractions Walt Disney Studios
  */
  server.get("/nav_attractions_studio", (req, res, next) => {
    let id = 2;
    let sqlNavAttractionsPark = `SELECT p.slug AS pslug, p.name AS pname, u.slug AS uslug, u.name AS uname, a.slug, a.id, a.name, a.description, a.restriction FROM attraction a JOIN univers u ON u.id = a.id_univ JOIN park p ON p.id = u.id_park WHERE p.id = ${id}`;
    database.raw(sqlNavAttractionsPark)
      .then(([rows, columns]) => {
        const result = rows.map((el) => ({
          id: el.id,
          name: el.name,
          slug: el.slug,
          uname: el.uname,
          uslug: el.uslug,
          pname: el.pname,
          pslug: el.pslug
        }));
        res.json(result);
      })
  });

  /* ************************************************************************************************** */

  /*
  Page Parks
  Query park, univers, attractions by park ID
  */
  server.get("/park_by_id_with_univers_count", (req, res, next) => {
    let id = req.query.id;
    let sqlParkById = `SELECT p.slug , p.name, p.description FROM park p WHERE p.id = ${id}`;
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

  /* ************************************************************************************************** */

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

  /* ************************************************************************************************** */

  /*
  Page Attraction
  Attraction by ID
  */
  server.get("/attraction_by_id", (req, res, next) => {
    let id = req.query.id;
    let sqlAttractionById = `SELECT slug, name, public, description, restriction, pictures, movies FROM attraction WHERE id = ${id}`;
    database.raw(sqlAttractionById)
      .then(([rows, columns]) => {
        const result = rows.map((el) => ({
          uname: el.uname,
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

  /* ************************************************************************************************** */

  return server;
}

module.exports = select();