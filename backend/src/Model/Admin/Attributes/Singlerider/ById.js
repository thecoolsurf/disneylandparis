/* backend/src/Model/Admin/Attributes/Singlerider/ById.js */

const by_id = `
SELECT 
id, name, description
FROM singlerider
WHERE id = ?`;

module.exports = by_id;