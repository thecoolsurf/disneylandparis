/* backend/src/Model/Admin/Evacuation/Delete */

const deleting = `
DELETE FROM evacuation 
WHERE id = ?`;

module.exports = deleting;