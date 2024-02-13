/* backend/src/Model/Admin/Attributes/Interest/Update.js */

const update = `
UPDATE interest SET 
name = ?, description = ?
WHERE id = ?`;

module.exports = update;
