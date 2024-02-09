/* backend/src/Model/Admin/Category/Insert.js */

const insert = `
INSERT INTO category 
(name, slug) 
VALUES
(?, ?);
`;

module.exports = insert;