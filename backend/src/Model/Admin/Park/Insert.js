/* backend/src/Model/Admin/Park/Insert.js */

const park_insert = `
INSERT INTO park 
(name, slug, description) 
VALUES
(?, ?, ?);
`;

module.exports = park_insert;