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
  let sql_park = 'SELECT id, name, url FROM park';
  server.get("/park", (req, res, next) => {
    database.raw(sql_park)
      .then(([rows, columns]) => {
        const result = rows.map((el) => ({
          id: el.id,
          name: el.name,
          url: el.url
        }));
        res.json(result);
      })
      .catch((error) => {
        res.status(500).json({ error: 'error server' });
      });
  })
  let sql_cat = 'SELECT c.id, c.name, c.url, p.id AS park_id, p.name AS park_name FROM category AS c LEFT JOIN park AS p ON p.id = c.id_park';
  server.get("/category", (req, res, next) => {
    database.raw(sql_cat)
      .then(([rows, columns]) => {
        const result = rows.map((el) => ({
          park_name: el.park_name,
          park_id: el.park_id,
          id: el.id,
          name: el.name,
          url: el.url
        }));
        res.json(result);
      })
      .catch((error) => {
        res.status(500).json({ error: 'error server' });
      });
  });
  return server;
}
module.exports = select();