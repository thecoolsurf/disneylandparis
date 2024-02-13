/* backend/src/Model/Admin/Attributes/Sensory/Insert.js */

const insert = `
INSERT INTO sensory 
(name, description) 
VALUES
(?, ?);
`;

module.exports = insert;