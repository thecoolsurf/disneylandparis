/* backend/src/Model/Admin/Attributes/Photopass/ById.js */

const by_id = `
SELECT 
id, name
FROM photopass
WHERE id = ?`;

module.exports = by_id;