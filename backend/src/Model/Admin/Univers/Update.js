/* backend/src/Model/Admin/Univers/Update.js */

const update = `
UPDATE univers SET 
id_park = ?, name = ?, slug = ?, description = ?
WHERE id = ?`;

module.exports = update;
