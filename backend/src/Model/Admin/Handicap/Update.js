/* backend/src/Model/Admin/Handicap/Update.js */

const update = `
UPDATE handicap SET 
name = ?, description = ?
WHERE id = ?`;

module.exports = update;
