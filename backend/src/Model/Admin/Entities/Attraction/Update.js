/* backend/src/Model/Admin/Entity/Attraction/Update.js */

const update = `
UPDATE attraction SET 
id_park = ?, id_univ = ?, id_category = ?, 
name = ?, slug = ?, route = ?, 
id_public = ?, id_photopass = ?, id_premieraccess = ?, id_pmr = ?, 
duration = ?, height = ?, width = ?, speed = ?, ability = ?, 
id_height = ?, id_evacuation = ?, id_sensory = ?, 
handicaps = ?, interests = ?,
description = ?
WHERE id = ?`;

module.exports = update;
