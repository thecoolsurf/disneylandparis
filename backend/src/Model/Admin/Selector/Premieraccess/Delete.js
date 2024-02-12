/* backend/src/Model/Admin/Selector/Premieraccess/Delete */

const deleting = `
DELETE FROM premieraccess 
WHERE id = ?`;

module.exports = deleting;