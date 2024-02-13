/* backend/src/Model/Admin/Attributes/Premieraccess/Delete */

const deleting = `
DELETE FROM premieraccess 
WHERE id = ?`;

module.exports = deleting;