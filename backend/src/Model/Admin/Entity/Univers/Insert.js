/* backend/src/Model/Admin/Entity/Univers/Insert.js */

const univers_insert = `
INSERT INTO univers 
(id_park, name, slug, route, description) 
VALUES
(?, ?, ?, ?, ?);
`;

module.exports = univers_insert;