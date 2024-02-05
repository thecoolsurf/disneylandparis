/* backend/src/Model/Admin/Park/Update.js */

const update = `
UPDATE park SET 
name = ? , slug = ?, route = ?, title = ?, description = ?
WHERE id = ?`;

module.exports = update;