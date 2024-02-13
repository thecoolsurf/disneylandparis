/* backend/src/Model/Admin/Attributes/Category/Delete */

const deleting = `
DELETE FROM category WHERE id = ?`;

module.exports = deleting;