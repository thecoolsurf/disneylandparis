/* backend/src/Model/Admin/Park/ById.js */

const by_id = `
SELECT 
id, name, slug, route, title, description 
FROM park 
WHERE id = ?`;

module.exports = by_id;