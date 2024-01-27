/* backend/src/Model/Admin/Attraction/Delete */

const attraction_delete = `
DELETE FROM attraction 
WHERE id = ?`;

module.exports = attraction_delete;