/* backend/src/Model/Admin/Attributes/Origin/Collection.js */

const collection = `
SELECT 
id, name
FROM 
origin
ORDER BY name
`;

module.exports = collection;