/* backend/src/Model/Admin/Attributes/Evacuation/Update.js */

const update = `
UPDATE evacuation SET 
name = ?, description = ?
WHERE id = ?
`;

module.exports = update;
