/* backend/src/Model/Admin/Attraction/Delete */

const deleting = `
DELETE FROM attraction 
WHERE id = ?`;

module.exports = deleting;