/* backend/src/Model/Admin/Selector/Evacuation/Update.js */

const update = `
UPDATE evacuation SET 
name = ?, level = ?, description = ?
WHERE id = ?`;

module.exports = update;
