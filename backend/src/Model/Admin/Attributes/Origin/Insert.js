/* backend/src/Model/Admin/Attributes/Origin/Insert.js */

const insert = `
INSERT INTO origin 
(name, slug, route, description) 
VALUES
(?, ?, ?, ?);
`;

module.exports = insert;