/* backend/src/Model/Admin/Entity/Administrator/Update.js */

const update = `
UPDATE administrator SET 
firstname = ?, lastname = ?, email = ?, password = ?, token = ?
WHERE id = ?`;

module.exports = update;