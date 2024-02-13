/* backend/src/Model/Admin/Attributes/Photopass/Update.js */

const update = `
UPDATE photopass SET 
name = ?
WHERE id = ?`;

module.exports = update;