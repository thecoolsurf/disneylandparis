/* backend/src/Model/Admin/Entity/Attraction/Delete */

const deleting = `
DELETE FROM attraction 
WHERE id = ?`;

module.exports = deleting;