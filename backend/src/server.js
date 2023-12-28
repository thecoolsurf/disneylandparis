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

  /* Query for All Parks */
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

  /* Query Menus Park Disneyland */
  server.get("/nav_univers_park", (req, res, next) => {
    let id = 1;
    let sqlNavUniversPark = `SELECT u.id, u.name, u.slug, u.id_park, p.slug AS pslug, p.name AS pname FROM univers AS u JOIN park AS p ON p.id = u.id_park AND p.id = ${id}`;
    database.raw(sqlNavUniversPark)
      .then(([rows, columns]) => {
        const result = rows.map((el) => ({
          id: el.id,
          id_park: el.id_park,
          name: el.name,
          slug: el.slug,
          pname: el.pname,
          pslug: el.pslug
        }));
        res.json(result);
      })
  });

  /* Query Menus Walt Disney Studio */
  server.get("/nav_univers_studio", (req, res, next) => {
    let id = 2;
    let sqlNavUniversStudio = `SELECT u.id, u.name, u.slug, u.id_park, p.slug AS pslug, p.name AS pname FROM univers AS u JOIN park AS p ON p.id = u.id_park AND p.id = ${id}`;
    database.raw(sqlNavUniversStudio)
      .then(([rows, columns]) => {
        const result = rows.map((el) => ({
          id: el.id,
          id_park: el.id_park,
          name: el.name,
          slug: el.slug,
          pname: el.pname,
          pslug: el.pslug
        }));
        res.json(result);
      })
  });

  /* Query Univers by Park */
  server.get("/univers_by_park", (req, res, next) => {
    let id = 1;
    let sqlUniversByPark = `SELECT slug, name, description FROM univers WHERE id = ${id}`;
    database.raw(sqlUniversByPark)
      .then(([rows, columns]) => {
        const result = rows.map((el) => ({
          id: el.id,
          slug: el.slug,
          name: el.name,
          description: el.description
        }));
        res.json(result);
      })
  });

  /* Query Attractions by Univers -> page univers */
  server.get("/attraction_by_univers/:id_park/:id_univ", (req, res, next) => {
    let id_univ = req.get('id_park');
    console.log(id_univ);
    let id = 1;
    let sqlAttractionByUnivers = `SELECT id, slug, name, pictures FROM attraction WHERE id_univ = ${id}`;
    database.raw(sqlAttractionByUnivers)
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