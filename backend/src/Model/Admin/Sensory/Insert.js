/* backend/src/Model/Admin/Sensory/Insert.js */

const insert = `
INSERT INTO sensory 
(level, description) 
VALUES
(?, ?);
`;

module.exports = insert;