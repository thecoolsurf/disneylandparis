/* backend/src/Model/Admin/Administrator/Delete */

const administrator_delete = `
DELETE FROM administrator 
WHERE id = ?`;

module.exports = administrator_delete;