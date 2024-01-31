/* backend/src/Model/Admin/Sensory/Update.js */

const update = `
UPDATE sensory SET 
name = ?, description = ?
WHERE id = ?`;

module.exports = update;
