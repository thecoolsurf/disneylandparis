/* backend/src/Model/Admin/Attributes/Singlerider/Delete */

const deleting = `
DELETE 
FROM singlerider 
WHERE id = ?`;

module.exports = deleting;