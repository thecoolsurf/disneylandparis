/* backend/src/Model/Admin/Selector/Height/Insert.js */

const insert = `
INSERT INTO height 
(name, description) 
VALUES
(?, ?);
`;

module.exports = insert;