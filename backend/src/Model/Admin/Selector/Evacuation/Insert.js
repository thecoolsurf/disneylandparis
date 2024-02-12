/* backend/src/Model/Admin/Selector/Evacuation/Insert.js */

const insert = `
INSERT INTO evacuation 
(name, level, description) 
VALUES
(?, ?, ?);
`;

module.exports = insert;