/* backend/src/Model/Admin/Administrator/Update.js */

const update = `
UPDATE administrator SET 
firstname = ?, lastname = ?, email = ?, password = ?, token = ?
WHERE id = ?`;

module.exports = update;