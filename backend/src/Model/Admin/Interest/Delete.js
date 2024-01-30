/* backend/src/Model/Admin/Interest/Delete */

const deleting = `
DELETE FROM interest 
WHERE id = ?`;

module.exports = deleting;