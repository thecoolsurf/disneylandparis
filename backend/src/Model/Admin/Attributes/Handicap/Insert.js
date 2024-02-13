/* backend/src/Model/Admin/Attributes/Handicap/Insert.js */

const insert = `
INSERT INTO handicap 
(name, description) 
VALUES
(?, ?);
`;

module.exports = insert;