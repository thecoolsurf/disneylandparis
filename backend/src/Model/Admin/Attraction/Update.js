/* backend/src/Model/Admin/Attraction/Update.js */

const update = `
UPDATE attraction SET 
id_park = ?, id_univ = ?, name = ?, slug = ?, 
public = ?, restriction = ?, description = ?, pictures = ?, movies = ?
WHERE id = ?`;

module.exports = update;
