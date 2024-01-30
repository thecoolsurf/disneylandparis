/* backend/src/Model/Admin/Evacuation/Insert.js */

const insert = `
INSERT INTO evacuation 
(level, description) 
VALUES
(?, ?);
`;

module.exports = insert;