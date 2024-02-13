/* backend/src/Model/Admin/Attributes/Handicap/Delete */

const deleting = `
DELETE FROM handicap WHERE id = ?`;

module.exports = deleting;