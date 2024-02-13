/* backend/src/Model/Admin/Attributes/Handicap/Update.js */

const update = `
UPDATE handicap SET 
name = ?, description = ?
WHERE id = ?`;

module.exports = update;
