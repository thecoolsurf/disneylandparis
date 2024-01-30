/* backend/src/Model/Admin/Administrator/Collection.js */

const collection = `
SELECT 
id, firstname, lastname, email, password, token
FROM 
administrator`;

module.exports = collection;