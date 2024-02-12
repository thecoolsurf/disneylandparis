/* backend/src/Model/Admin/Attraction/ById.js */

const by_id = `
SELECT 
id, id_park, id_univ, id_category, 
slug, route, name, public, photopass, premieraccess, pmr, 
duration, height, width, speed, ability,
id_evacuation, id_height, id_sensory, handicaps, interests, 
duration, description, pictures, movies
FROM attraction 
WHERE id = ?`;

module.exports = by_id;