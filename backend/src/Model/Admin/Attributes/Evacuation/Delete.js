/* backend/src/Model/Admin/Attributes/Evacuation/Delete */

const deleting = `
DELETE 
FROM evacuation 
WHERE id = ?
`;

module.exports = deleting;