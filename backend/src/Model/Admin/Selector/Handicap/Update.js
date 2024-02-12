/* backend/src/Model/Admin/Selector/Handicap/Update.js */

const update = `
UPDATE handicap SET 
name = ?, description = ?
WHERE id = ?`;

module.exports = update;
