/* backend/src/Model/Admin/Attributes/Premieraccess/Update.js */

const update = `
UPDATE premieraccess SET 
name = ?
WHERE id = ?`;

module.exports = update;