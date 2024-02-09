/* backend/src/Model/Admin/Category/Delete */

const deleting = `
DELETE FROM category 
WHERE id = ?`;

module.exports = deleting;