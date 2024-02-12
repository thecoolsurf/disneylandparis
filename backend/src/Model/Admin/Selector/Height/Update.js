/* backend/src/Model/Admin/Selector/Height/Update.js */

const update = `
UPDATE height SET 
name = ?, description = ?
WHERE id = ?`;

module.exports = update;
