/* backend/src/Model/Admin/Univers/Delete */

const univers_delete = `
DELETE FROM univers 
WHERE id = ?`;

module.exports = univers_delete;