/* backend/src/Model/Admin/Attributes/Photopass/Delete */

const deleting = `
DELETE FROM photopass WHERE id = ?`;

module.exports = deleting;