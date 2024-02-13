/* backend/src/Model/Admin/Attributes/Evacuation/Update.js */

const update = `
UPDATE evacuation SET 
name = ?, level = ?, description = ?
WHERE id = ?`;

module.exports = update;
