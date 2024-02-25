/* backend/src/Model/Admin/Attributes/Evacuation/ById.js */

const by_id = `
SELECT 
id, name, description
FROM evacuation 
WHERE id = ?`;

module.exports = by_id;