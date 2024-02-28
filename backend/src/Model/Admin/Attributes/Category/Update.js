/* backend/src/Model/Admin/Attributes/Category/Update.js */

const update = `
UPDATE category SET 
name = ?, slug = ?, route = ?
WHERE id = ?`;

module.exports = update;