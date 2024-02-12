/* backend/src/Model/Admin/Selector/Photopass/Delete */

const deleting = `
DELETE FROM photopass 
WHERE id = ?`;

module.exports = deleting;