/* backend/src/Model/Admin/Entity/Attraction/ById.js */

const by_id = `
SELECT 
id, id_park, id_univ, id_category, id_origin, 
created, author, 
slug, route, name, 
id_public, id_photopass, id_pmr, id_singlerider, 
premieraccess, 
id_height, id_evacuation, id_sensory, 
description, duration, height, width, speed, ability, 
handicaps, interests
FROM attraction 
WHERE id = ?`;

module.exports = by_id;