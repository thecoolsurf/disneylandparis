/* backend/src/Model/Admin/Selector/Handicap/Delete */

const deleting = `
DELETE FROM handicap 
WHERE id = ?`;

module.exports = deleting;