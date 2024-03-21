/* backend/src/Model/Admin/Attributes/Origin/Update.js */

const update = `
UPDATE origin SET 
name = ?, slug = ?, route = ?, description = ?
WHERE id = ?`;

module.exports = update;