/* backend/src/Model/Admin/Attributes/Public/ById.js */

const by_id = `
SELECT 
id, name
FROM public
WHERE id = ?`;

module.exports = by_id;