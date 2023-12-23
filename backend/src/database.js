const knex = require('knex');
const config = require('./config');

module.exports = knex({
  client: 'mysql2',
  connection: config.db,
});
