/* backend/src/Model/Admin/Sensory/Update.js */

const update = `
UPDATE sensory SET 
index = ?, description = ?
WHERE id = ?`;

module.exports = update;
