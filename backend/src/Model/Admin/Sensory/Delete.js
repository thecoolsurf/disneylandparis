/* backend/src/Model/Admin/Sensory/Delete */

const deleting = `
DELETE FROM sensory 
WHERE id = ?`;

module.exports = deleting;