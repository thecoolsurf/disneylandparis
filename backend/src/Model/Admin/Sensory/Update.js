/* backend/src/Model/Admin/Sensory/Update.js */

const update = `
UPDATE sensory SET 
level = ?, description = ?
WHERE id = ?`;

module.exports = update;
