/* backend/src/Model/Admin/Height/Insert.js */

const insert = `
INSERT INTO height 
(description) 
VALUES
(?);
`;

module.exports = insert;