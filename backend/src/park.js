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

function select(table, attributes) {
  let sql = `SELECT ${attributes} FROM ${table};`;
  server.use(morgan("common"));
  server.use(cors(corsOptions));
  server.get("/", (req, res, next) => {
    database.raw(sql)
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
  return server;
}
module.exports = select('park', '*');