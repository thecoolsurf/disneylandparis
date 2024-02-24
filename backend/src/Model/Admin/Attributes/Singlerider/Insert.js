/* backend/src/Model/Admin/Attributes/Singlerider/Insert.js */

const insert = `
INSERT INTO singlerider 
(name, description) VALUES 
(?, ?);
`;

module.exports = insert;