/* backend/src/Model/Admin/Attributes/Pmr/Update.js */

const update = `
UPDATE pmr SET 
name = ?
WHERE id = ?`;

module.exports = update;