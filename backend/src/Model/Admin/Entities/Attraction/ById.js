/* backend/src/Model/Admin/Entity/Attraction/ById.js */

const by_id = `
SELECT 
id, id_park, id_univ, id_category, 
slug, route, name, 
id_public, id_photopass, id_premieraccess, id_pmr, id_height, id_evacuation, id_sensory, 
description, duration, height, width, speed, ability, handicaps, interests
FROM attraction 
WHERE id = ?`;

module.exports = by_id;