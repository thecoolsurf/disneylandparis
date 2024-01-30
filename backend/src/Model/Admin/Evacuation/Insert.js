/* backend/src/Model/Admin/Evacuation/Insert.js */

const insert = `
INSERT INTO evacuation 
(index, description) 
VALUES
(?, ?);
`;

module.exports = insert;