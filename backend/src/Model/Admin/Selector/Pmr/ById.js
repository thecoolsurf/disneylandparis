/* backend/src/Model/Admin/Selector/Pmr/ById.js */

const by_id = `SELECT 
id, name
FROM pmr
WHERE id = ?`;

module.exports = by_id;