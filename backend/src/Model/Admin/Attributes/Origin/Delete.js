/* backend/src/Model/Admin/Attributes/Origin/Delete */

const deleting = `
DELETE FROM origin WHERE id = ?`;

module.exports = deleting;