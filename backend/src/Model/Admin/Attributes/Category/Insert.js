/* backend/src/Model/Admin/Attributes/Category/Insert.js */

const insert = `
INSERT INTO category 
(name, slug, route) 
VALUES
(?, ?, ?);
`;

module.exports = insert;