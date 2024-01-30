/* backend/src/Model/Admin/Height/ById.js */

const by_id = `
SELECT 
id, description
FROM height 
WHERE id = ?`;

module.exports = by_id;