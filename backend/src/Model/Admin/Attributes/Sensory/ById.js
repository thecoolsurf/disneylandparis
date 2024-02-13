/* backend/src/Model/Admin/Attributes/Sensory/ById.js */

const by_id = `
SELECT 
id, name, description
FROM sensory 
WHERE id = ?`;

module.exports = by_id;