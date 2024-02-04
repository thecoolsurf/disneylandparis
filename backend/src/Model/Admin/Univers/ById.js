/* backend/src/Model/Admin/Univers/ById.js */

const by_id = `
SELECT 
id, id_park, slug, url, name, description
FROM univers
WHERE id = ?`;

module.exports = by_id;