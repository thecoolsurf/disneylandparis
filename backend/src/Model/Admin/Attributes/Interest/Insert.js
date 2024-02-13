/* backend/src/Model/Admin/Attributes/Interest/Insert.js */

const insert = `
INSERT INTO interest 
(name, description) 
VALUES
(?, ?);
`;

module.exports = insert;