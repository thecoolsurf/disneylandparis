/* backend/src/Model/Admin/Entity/Attraction/Update.js */
/* 22 rows */

const update = `
UPDATE attraction SET 
id_park = ?, id_univ = ?, id_category = ?, 
name = ?, slug = ?, route = ?, 
id_public = ?, id_photopass = ?, id_pmr = ?, id_singlerider = ?, 
premieraccess = ?,  
duration = ?, height = ?, width = ?, speed = ?, ability = ?, 
id_evacuation = ?, id_height = ?, id_sensory = ?, 
handicaps = ?, interests = ?,
description = ?
WHERE id = ?`;

module.exports = update;
