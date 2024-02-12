/* backend/src/Model/Admin/Selector/Category/Update.js */

const update = `
UPDATE category SET 
name = ?, slug = ?
WHERE id = ?`;

module.exports = update;