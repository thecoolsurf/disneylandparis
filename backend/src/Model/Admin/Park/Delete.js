/* backend/src/Model/Admin/Park/Delete */

const park_delete = `
DELETE FROM park 
WHERE id = ?`;

module.exports = park_delete;