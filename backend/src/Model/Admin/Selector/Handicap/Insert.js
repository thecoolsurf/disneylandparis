/* backend/src/Model/Admin/Selector/Handicap/Insert.js */

const insert = `
INSERT INTO handicap 
(name, description) 
VALUES
(?, ?);
`;

module.exports = insert;