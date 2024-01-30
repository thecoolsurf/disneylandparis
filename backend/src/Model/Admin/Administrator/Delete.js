/* backend/src/Model/Admin/Administrator/Delete */

const deleting = `
DELETE FROM administrator 
WHERE id = ?`;

module.exports = deleting;