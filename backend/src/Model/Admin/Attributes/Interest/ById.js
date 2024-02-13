/* backend/src/Model/Admin/Attributes/Interest/ById.js */

const by_id = `
SELECT 
id, name, description
FROM interest 
WHERE id = ?`;

module.exports = by_id;