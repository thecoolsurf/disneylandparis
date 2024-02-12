/* backend/src/Model/Admin/Administrator/Connexion.js */

const connexion = `
SELECT 
firstname, lastname
FROM administrator
WHERE email = ? AND password = ?
;`;

module.exports = connexion;