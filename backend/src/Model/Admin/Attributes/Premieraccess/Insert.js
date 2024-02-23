/* backend/src/Model/Admin/Attributes/Premieraccess/Insert.js */

const insert = `
INSERT INTO premieraccess 
(name, description) VALUES (?, ?);
`;

module.exports = insert;