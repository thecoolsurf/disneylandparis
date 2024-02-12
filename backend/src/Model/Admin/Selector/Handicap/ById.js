/* backend/src/Model/Admin/Selector/Handicap/ById.js */

const by_id = `
SELECT 
id, name, description
FROM handicap 
WHERE id = ?`;

module.exports = by_id;