/* backend/src/Model/Admin/Attributes/Origin/ById.js */

const by_id = `
SELECT 
id, slug, name, route, description
FROM origin
WHERE id = ?`;

module.exports = by_id;