/* backend/src/Model/Admin/Attraction/Update.js */

const update = `
UPDATE attraction SET 
id_park = ?, id_univ = ?, name = ?, slug = ?, url = ?, public = ?, 
id_evacuation = ?, id_height = ?, id_sensory = ?, handicaps = ?, interests = ?, description = ?, pictures = ?, movies = ?
WHERE id = ?`;

module.exports = update;
