/* backend/src/Model/Admin/Selector/Interest/Insert.js */

const insert = `
INSERT INTO interest 
(name, description) 
VALUES
(?, ?);
`;

module.exports = insert;