/* backend/src/Model/Admin/Park/Insert.js */

const insert = `
INSERT INTO park 
(name, slug, url, title, description) 
VALUES
(?, ?, ?, ?, ?);
`;

module.exports = insert;