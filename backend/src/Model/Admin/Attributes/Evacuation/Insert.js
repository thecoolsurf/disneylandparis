/* backend/src/Model/Admin/Attributes/Evacuation/Insert.js */

const insert = `
INSERT INTO evacuation 
(name, description) 
VALUES
(?, ?);
`;

module.exports = insert;