/* backend/src/Model/Admin/Handicap/ById.js */

const by_id = `
SELECT 
id, name, description
FROM handicap 
WHERE id = ?`;

module.exports = by_id;