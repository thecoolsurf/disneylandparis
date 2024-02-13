/* backend/src/Model/Admin/Entity/Univers/ById.js */

const by_id = `
SELECT 
id, id_park, slug, route, name, description
FROM univers
WHERE id = ?`;

module.exports = by_id;