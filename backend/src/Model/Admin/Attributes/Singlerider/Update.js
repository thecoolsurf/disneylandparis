/* backend/src/Model/Admin/Attributes/Singlerider/Update.js */

const update = `
UPDATE singllerider SET 
name = ?, description = ?
WHERE id = ?`;

module.exports = update;