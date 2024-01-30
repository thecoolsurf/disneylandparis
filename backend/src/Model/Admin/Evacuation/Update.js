/* backend/src/Model/Admin/Evacuation/Update.js */

const update = `
UPDATE evacuation SET 
level = ?, description = ?
WHERE id = ?`;

module.exports = update;
