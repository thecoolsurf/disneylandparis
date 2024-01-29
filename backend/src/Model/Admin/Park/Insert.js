/* backend/src/Model/Admin/Park/Insert.js */

const park_insert = `
INSERT INTO park 
(name, slug, title, description) 
VALUES
(?, ?, ?, ?);
`;

module.exports = park_insert;