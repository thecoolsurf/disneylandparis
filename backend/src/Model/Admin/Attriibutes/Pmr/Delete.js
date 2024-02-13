/* backend/src/Model/Admin/Attributes/Pmr/Delete */

const deleting = `
DELETE FROM pmr 
WHERE id = ?`;

module.exports = deleting;