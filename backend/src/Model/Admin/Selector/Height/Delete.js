/* backend/src/Model/Admin/Selector/Height/Delete */

const deleting = `
DELETE FROM height 
WHERE id = ?`;

module.exports = deleting;