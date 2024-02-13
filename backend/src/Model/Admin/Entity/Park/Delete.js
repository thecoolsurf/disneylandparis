/* backend/src/Model/Admin/Entity/Park/Delete */

const deleting = `
DELETE FROM park WHERE id = ?`;

module.exports = deleting;