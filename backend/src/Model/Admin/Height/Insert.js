/* backend/src/Model/Admin/Height/Insert.js */

const insert = `
INSERT INTO height 
(name, description) 
VALUES
(?, ?);
`;

module.exports = insert;