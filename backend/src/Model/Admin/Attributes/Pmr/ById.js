/* backend/src/Model/Admin/Attributes/Pmr/ById.js */

const by_id = `
SELECT 
id, name, description
FROM pmr
WHERE id = ?`;

module.exports = by_id;