/* backend/src/Model/Admin/Entity/Administrator/Insert.js */

const insert = `
INSERT INTO administrator 
(firstname, lastname, email, password, token) 
VALUES
(?, ?, ?, ?, ?);
`;

module.exports = insert;