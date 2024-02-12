/* backend/src/Model/Admin/Selector/Premieraccess/Update.js */

const update = `
UPDATE premieraccess SET 
name = ?
WHERE id = ?`;

module.exports = update;