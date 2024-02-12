/* backend/src/Model/Admin/Selector/Evacuation/Delete */

const deleting = `
DELETE FROM evacuation 
WHERE id = ?`;

module.exports = deleting;