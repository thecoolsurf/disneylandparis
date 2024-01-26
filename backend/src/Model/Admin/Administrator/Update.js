/* backend/src/Model/Admin/Administrator/Update.js */

const administrator_update = `
UPDATE administrator SET 
firstname = ?, lastname = ?, email = ?, password = ?, token = ?
WHERE id = ?`;

module.exports = administrator_update;