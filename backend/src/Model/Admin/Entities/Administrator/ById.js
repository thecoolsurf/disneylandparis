/* backend/src/Model/Admin/Entity/Administrator/ById.js */

const by_id = `
SELECT 
id, firstname, lastname, email, password, token
FROM administrator
WHERE id = ?
`;

module.exports = by_id;