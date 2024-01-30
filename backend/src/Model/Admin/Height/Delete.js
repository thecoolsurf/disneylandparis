/* backend/src/Model/Admin/Height/Delete */

const deleting = `
DELETE FROM height 
WHERE id = ?`;

module.exports = deleting;