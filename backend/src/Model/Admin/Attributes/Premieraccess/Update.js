/* backend/src/Model/Admin/Attributes/Premieraccess/Update.js */

const update = `
UPDATE premieraccess SET 
name = ?, description = ?
WHERE id = ?`;

module.exports = update;