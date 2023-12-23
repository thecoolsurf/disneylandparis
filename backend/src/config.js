const fs = require("fs");
const readPassword = filename => fs.readFileSync(filename).toString("utf8");

const config = {
  db: {
    host: process.env.DATABASE_HOST || "localhost",
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_DB,
    user: process.env.DATABASE_USER,
    password: readPassword(process.env.DATABASE_PASSWORD)
  },
  max: 20,
  port: process.env.PORT
};
module.exports = config;