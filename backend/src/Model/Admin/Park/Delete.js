/* backend/src/Model/Admin/Park/Delete */

const deleting = `
DELETE FROM park 
WHERE id = ?`;

module.exports = deleting;