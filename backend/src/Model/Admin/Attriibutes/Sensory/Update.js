/* backend/src/Model/Admin/Selector/Sensory/Update.js */

const update = `
UPDATE sensory SET 
name = ?, description = ?
WHERE id = ?`;

module.exports = update;
