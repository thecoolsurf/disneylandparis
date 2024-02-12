/* backend/src/Model/Admin/Selector/Category/Delete */

const deleting = `
DELETE FROM category 
WHERE id = ?`;

module.exports = deleting;