/* backend/src/Model/Admin/Evacuation/Update.js */

const update = `
UPDATE evacuation SET 
index = ?, description = ?
WHERE id = ?`;

module.exports = update;
