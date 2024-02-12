/* backend/src/Model/Admin/Selector/Category/Insert.js */

const insert = `
INSERT INTO category 
(name, slug) 
VALUES
(?, ?);
`;

module.exports = insert;