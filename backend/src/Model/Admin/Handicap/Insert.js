/* backend/src/Model/Admin/Handicap/Insert.js */

const insert = `
INSERT INTO handicap 
(description) 
VALUES
(?);
`;

module.exports = insert;