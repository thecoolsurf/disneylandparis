/* backend/src/Model/Admin/Selector/Pmr/Update.js */

const update = `
UPDATE pmr SET 
name = ?
WHERE id = ?`;

module.exports = update;