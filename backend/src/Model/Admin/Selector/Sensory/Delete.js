/* backend/src/Model/Admin/Selector/Sensory/Delete */

const deleting = `
DELETE FROM sensory 
WHERE id = ?`;

module.exports = deleting;