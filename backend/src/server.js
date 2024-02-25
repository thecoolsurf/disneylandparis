const morgan = require("morgan");
const cors = require('cors');
const config = require('./config');
const express = require("express");
const server = express();
const bcrypt = require("bcrypt");
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
server.use(express.urlencoded({ extended: true }));

/* ************************************************************************************************** */

function select(route, sql) {
	server.get(route, (req, res, next) => {
		if (req.query.id) {
			let id = req.query.id;
			knex.raw(sql, id)
				.then(([rows, columns]) => {
					res.json(rows);
				})
		} else if (req.query.ids) {
			let entity = route.split('/')[1];
			let ids = req.query.ids.toString();
			knex.raw(`SELECT name, description FROM ${entity} WHERE id IN (${ids})`)
				.then(([rows, columns]) => {
					res.json(rows);
				})
		} else if (req.query.find) {
			let find = req.query.find ? req.query.find : '';
			knex.raw(sql, '%' + find + '%')
			.then(([rows, columns]) => {
				const result = rows.map((el) => ({
					name: el.name,
					route: el.route,
				}));
				res.json(result);
			})
		} else {
			knex.raw(sql)
				.then(([rows, columns]) => {
					res.json(rows);
				})
		}
	});
	return server;
}

/* ************************************************************************************************** */

function jsonToArray(body) {
	/* convert json to array */
	let array = [];
	let values = Object.values(body);
	Array.prototype.push.apply(array, values);
	return array;
}

function cleanInputs(object) {
	/* delete fields with checkbox */
	delete object.interest;
	delete object.handicap;
	delete object.premieracces;
	return object;
}

function update(route, sql) {
	let entity = route.split('/')[3];
	let url = `http://localhost:3000/admin/entity/collection/${entity}`;
	server.post(route, (req, res, next) => {
		let postDatas = cleanInputs(req.body);
		let datas = jsonToArray(postDatas);
		knex.raw(sql, datas).then(([rows, columns]) => {
			res.redirect(url);
		})
	});
	return server;
}

function insert(route, sql) {
	let entity = route.split('/')[3];
	let url = `http://localhost:3000/admin/entity/collection/${entity}`;
	server.post(route, (req, res, next) => {
		let postDatas = cleanInputs(req.body);
		let datas = jsonToArray(postDatas);
		datas.pop(); // for id
		knex.raw(sql, datas).then(([rows, columns]) => {
			res.redirect(url);
		})
	});
	return server;
}

function deleting(route, sql) {
	let entity = route.split('/')[3];
	let url = `http://localhost:3000/admin/entity/collection/${entity}`;
	server.post(route, (req, res, next) => {
		let id = req.body.id;
		knex.raw(sql, id).then(([rows, columns]) => {
			res.redirect(url);
		})
	});
	return server;
}

/* ************************************************************************************************** */
/* PUBLIC */

/* menus */
const nav_attractions_univers_parks = require('./Model/Public/Navigation/AttractionsAndUniversAndParks.js');
select("/navigation", nav_attractions_univers_parks);

/* home page */
const home = require('./Model/Public/Home/Datas.js');
select("/home", home);

/* park page */
const park = require('./Model/Public/Park/ParkById.js');
select("/park_by_id", park);

/* univers page */
const univers = require('./Model/Public/Univers/UniversById.js');
select("/univers_by_id", univers);
const attractions_by_univers = require('./Model/Public/Attraction/AttractionsByUnivers.js');
select("/attractions_by_univers", attractions_by_univers);

/* attraction page */
const attraction_by_id = require('./Model/Public/Attraction/AttractionById.js');
select("/attraction_by_id", attraction_by_id);
select("/handicap", null);
select("/interest", null);
select("/premieraccess", null);

/* find attraction page */
const attraction_find = require('./Model/Public/Attraction/FindAttraction.js');
select("/find_attraction", attraction_find);

/* ************************************************************************************************** */
/* ADMIN */

const entities = require('../src/Tables/Entities.js');
for (const entity of entities) {
	const folder = entity.charAt(0).toUpperCase() + entity.slice(1, entity.length);
	select(`/admin/collection/${entity}`, require(`./Model/Admin/Entities/${folder}/Collection.js`));
	select(`/admin/form/${entity}`, require(`./Model/Admin/Entities/${folder}/ById.js`));
	update(`/admin/update/${entity}`, require(`./Model/Admin/Entities/${folder}/Update.js`));
	insert(`/admin/insert/${entity}`, require(`./Model/Admin/Entities/${folder}/Insert.js`));
	deleting(`/admin/delete/${entity}`, require(`./Model/Admin/Entities/${folder}/Delete.js`));
}

const attributes = require('../src/Tables/Attributes.js');
for (const attribute of attributes) {
	const folder = attribute.charAt(0).toUpperCase() + attribute.slice(1, attribute.length);
	select(`/admin/collection/${attribute}`, require(`./Model/Admin/Attributes/${folder}/Collection.js`));
	select(`/admin/form/${attribute}`, require(`./Model/Admin/Attributes/${folder}/ById.js`));
	update(`/admin/update/${attribute}`, require(`./Model/Admin/Attributes/${folder}/Update.js`));
	insert(`/admin/insert/${attribute}`, require(`./Model/Admin/Attributes/${folder}/Insert.js`));
	deleting(`/admin/delete/${attribute}`, require(`./Model/Admin/Attributes/${folder}/Delete.js`));
}

/* ************************************************************************************************** */

module.exports = server;