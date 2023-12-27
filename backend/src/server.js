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
  let sqlParks = 'SELECT id, name, slug, description FROM park';
  server.get("/parks", (req, res, next) => {
    database.raw(sqlParks)
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
  let sqlUniversPark = 'SELECT id, name, slug, description FROM univers WHERE id_park = 1';
  server.get("/univers_park", (req, res, next) => {
    database.raw(sqlUniversPark)
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
  let sqlUniversStudio = 'SELECT id, name, slug, description FROM univers WHERE id_park = 2';
  server.get("/univers_studio", (req, res, next) => {
    database.raw(sqlUniversStudio)
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
module.exports = select();