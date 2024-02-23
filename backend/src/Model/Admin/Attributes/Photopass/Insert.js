/* backend/src/Model/Admin/Attributes/Photopass/Insert.js */

const insert = `
INSERT INTO photopass 
(name, description) VALUES (?, ?);
`;

module.exports = insert;