/* backend/src/Model/Admin/Selector/Photopass/Update.js */

const update = `
UPDATE photopass SET 
name = ?
WHERE id = ?`;

module.exports = update;