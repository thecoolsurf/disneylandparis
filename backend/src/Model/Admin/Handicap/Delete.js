/* backend/src/Model/Admin/Handicap/Delete */

const deleting = `
DELETE FROM handicap 
WHERE id = ?`;

module.exports = deleting;