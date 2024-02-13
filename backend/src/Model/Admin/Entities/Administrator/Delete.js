/* backend/src/Model/Admin/Entity/Administrator/Delete */

const deleting = `
DELETE 
FROM administrator 
WHERE id = ?
`;

module.exports = deleting;