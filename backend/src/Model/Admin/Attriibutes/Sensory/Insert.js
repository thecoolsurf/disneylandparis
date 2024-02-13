/* backend/src/Model/Admin/Selector/Sensory/Insert.js */

const insert = `
INSERT INTO sensory 
(name, description) 
VALUES
(?, ?);
`;

module.exports = insert;