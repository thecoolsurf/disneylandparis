/* backend/src/Model/Admin/Attributes/Origin/Insert.js */

const insert = `
INSERT INTO origin 
(name, slug, route) 
VALUES
(?, ?, ?);
`;

module.exports = insert;