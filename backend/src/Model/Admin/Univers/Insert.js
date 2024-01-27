/* backend/src/Model/Admin/Univers/Insert.js */

const univers_insert = `
INSERT INTO univers 
(id_park, name, slug, description) 
VALUES
(?, ?, ?, ?);
`;

module.exports = univers_insert;