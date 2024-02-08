/* backend/src/Model/Admin/User/Delete */

const user_delete = `
DELETE FROM user 
WHERE id = ?`;

module.exports = user_delete;