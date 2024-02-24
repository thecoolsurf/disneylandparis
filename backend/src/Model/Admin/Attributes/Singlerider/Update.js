/* backend/src/Model/Admin/Attributes/Singlerider/Update.js */

const update = `
UPDATE singlerider SET 
name = ?, description = ?
WHERE id = ?`;

module.exports = update;