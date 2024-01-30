/* backend/src/Model/Admin/Sensory/Insert.js */

const insert = `
INSERT INTO sensory 
(index, description) 
VALUES
(?, ?);
`;

module.exports = insert;