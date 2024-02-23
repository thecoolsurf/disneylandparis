/* backend/src/Model/Admin/Attributes/Pmr/Insert.js */

const insert = `
INSERT INTO pmr 
(name, description) VALUES (?, ?);
`;

module.exports = insert;