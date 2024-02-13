/* backend/src/Model/Admin/Selector/Pmr/Delete */

const deleting = `
DELETE FROM pmr 
WHERE id = ?`;

module.exports = deleting;