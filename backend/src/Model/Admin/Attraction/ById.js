/* backend/src/Model/Admin/Attraction/ById.js */

const by_id = `
SELECT 
id, id_park, id_univ, slug, name, public, description, restriction, pictures, movies 
FROM attraction 
WHERE id = ?`;

module.exports = by_id;