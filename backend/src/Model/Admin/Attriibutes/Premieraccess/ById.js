/* backend/src/Model/Admin/Selector/Premieraccess/ById.js */

const by_id = `SELECT 
id, name
FROM premieraccess
WHERE id = ?`;

module.exports = by_id;