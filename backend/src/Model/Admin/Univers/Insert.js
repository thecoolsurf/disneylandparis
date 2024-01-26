/* backend/src/Model/Admin/Univers/Insert.js */

const univers_insert = `
INSERT INTO univers ('id','id_park','name','slug','description') 
VALUES
(null, ?, ?, ?, ?)
`;

module.exports = univers_insert;