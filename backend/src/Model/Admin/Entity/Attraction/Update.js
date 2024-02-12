/* backend/src/Model/Admin/Attraction/Update.js */

const update = `
UPDATE attraction SET 
id_park = ?, id_univ = ?, id_category = ?, 
name = ?, slug = ?, route = ?, 
id_public = ?, id_photopass = ?, id_premieraccess = ?, id_pmr = ?, id_height = ?, 
duration = ?, height = ?, width = ?, speed = ?, ability = ?,
id_evacuation = ?, id_height = ?, id_sensory = ?, 
handicaps = ?, interests = ?, description = ?
WHERE id = ?`;

module.exports = update;
