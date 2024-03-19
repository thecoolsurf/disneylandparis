/* backend/src/Model/Admin/Attributes/Origin/Update.js */

const update = `
UPDATE origin SET 
name = ?, slug = ?, route = ?
WHERE id = ?`;

module.exports = update;