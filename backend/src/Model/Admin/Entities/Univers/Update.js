/* backend/src/Model/Admin/Entity/Univers/Update.js */

const update = `
UPDATE univers SET 
id_park = ?, name = ?, slug = ?, route = ?, description = ?
WHERE id = ?`;

module.exports = update;
