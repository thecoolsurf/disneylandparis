/* backend/src/Model/Admin/Attributes/Category/ById.js */

const by_id = `
SELECT 
id, slug, name
FROM category
WHERE id = ?`;

module.exports = by_id;