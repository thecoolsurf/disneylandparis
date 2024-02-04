/* backend/src/Model/Admin/Park/Update.js */

const update = `
UPDATE park SET 
name = ? , slug = ?, url = ?, title = ?, description = ?
WHERE id = ?`;

module.exports = update;