/* backend/src/Model/Admin/Park/Insert.js */

const park_insert = `
INSERT INTO park ('id','name','slug','description') 
VALUES
(null, ?, ?, ?)
`;

module.exports = park_insert;