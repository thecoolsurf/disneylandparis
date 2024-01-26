/* backend/src/Model/Admin/Univers/Update.js */

const univers_update = `
UPDATE univers SET 
id_park = ?, name = ?, slug = ?, description = ?
WHERE id = ?`;

module.exports = univers_update;
