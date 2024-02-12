/* backend/src/Model/Admin/Selector/Interest/Delete */

const deleting = `
DELETE FROM interest 
WHERE id = ?`;

module.exports = deleting;