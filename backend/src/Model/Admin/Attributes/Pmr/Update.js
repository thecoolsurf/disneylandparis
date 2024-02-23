/* backend/src/Model/Admin/Attributes/Pmr/Update.js */

const update = `
UPDATE pmr SET 
name = ?, description = ?
WHERE id = ?`;

module.exports = update;