/* backend/src/Model/Admin/Attributes/Category/ById.js */

const by_id = `
SELECT 
id, slug, name, route
FROM category
WHERE id = ?`;

module.exports = by_id;