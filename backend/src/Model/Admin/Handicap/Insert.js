/* backend/src/Model/Admin/Handicap/Insert.js */

const insert = `
INSERT INTO handicap 
(name, description) 
VALUES
(?, ?);
`;

module.exports = insert;