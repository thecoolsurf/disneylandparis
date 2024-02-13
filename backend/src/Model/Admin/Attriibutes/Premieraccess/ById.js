/* backend/src/Model/Admin/Attributes/Premieraccess/ById.js */

const by_id = `
SELECT 
id, name
FROM premieraccess
WHERE id = ?`;

module.exports = by_id;