/* backend/src/Model/Public/User/Insert.js */

const user_insert = `
INSERT IN user VALUES 
(firstname = ?, lastname = ?, email = ?)`;

module.exports = user_insert;