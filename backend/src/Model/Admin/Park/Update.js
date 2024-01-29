/* backend/src/Model/Admin/Park/Update.js */

const park_update = `
UPDATE park SET 
name = ? , slug = ?, title = ?, description = ?
WHERE id = ?`;

module.exports = park_update;