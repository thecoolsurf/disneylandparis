/* backend/src/Model/Admin/Selector/Height/ById.js */

const by_id = `
SELECT 
id, name, description
FROM height 
WHERE id = ?`;

module.exports = by_id;