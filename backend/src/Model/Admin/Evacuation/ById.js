/* backend/src/Model/Admin/Evacuation/ById.js */

const by_id = `
SELECT 
id, level, description
FROM evacuation 
WHERE id = ?`;

module.exports = by_id;