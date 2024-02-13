/* backend/src/Model/Admin/Attributes/Sensory/Update.js */

const update = `
UPDATE sensory SET 
name = ?, description = ?
WHERE id = ?`;

module.exports = update;
