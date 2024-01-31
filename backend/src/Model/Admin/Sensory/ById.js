/* backend/src/Model/Admin/Sensory/ById.js */

const by_id = `
SELECT 
id, level, description
FROM sensory 
WHERE id = ?`;

module.exports = by_id;