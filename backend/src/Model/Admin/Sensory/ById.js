/* backend/src/Model/Admin/Sensory/ById.js */

const by_id = `
SELECT 
id, name, description
FROM sensory 
WHERE id = ?`;

module.exports = by_id;