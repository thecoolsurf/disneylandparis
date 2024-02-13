/* backend/src/Model/Admin/Attributes/Interest/Delete */

const deleting = `
DELETE FROM interest 
WHERE id = ?`;

module.exports = deleting;