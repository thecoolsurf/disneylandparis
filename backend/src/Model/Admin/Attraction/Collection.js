/* backend/src/Model/Admin/Attraction/Collection.js */

const collection = `
SELECT 
id, id_park, id_univ, name, slug, public, description, restriction, pictures, movies, 
FROM attraction`;

module.exports = collection;