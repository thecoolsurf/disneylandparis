/* backend/src/Model/Public/User/Update.js */

const user_update = `
UPDATE user SET 
(firstname = ?, lastname = ?, email = ?)
WHERE id = ?`;

module.exports = user_update;