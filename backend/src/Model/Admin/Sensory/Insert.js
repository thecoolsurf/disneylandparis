/* backend/src/Model/Admin/Sensory/Insert.js */

const insert = `
INSERT INTO sensory 
(name, description) 
VALUES
(?, ?);
`;

module.exports = insert;