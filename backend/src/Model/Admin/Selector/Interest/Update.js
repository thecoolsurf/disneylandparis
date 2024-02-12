/* backend/src/Model/Admin/Selector/Interest/Update.js */

const update = `
UPDATE interest SET 
name = ?, description = ?
WHERE id = ?`;

module.exports = update;
