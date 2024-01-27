/* backend/src/Model/Admin/Administrator/Insert.js */

const administrator_insert = `
INSERT INTO administrator 
(firstname, lastname, email, password, token) 
VALUES
(?, ?, ?, ?, ?);
`;

module.exports = administrator_insert;