/* backend/src/Model/Admin/Attributes/Category/Collection.js */

const collection = `
SELECT 
id, name
FROM 
category
ORDER BY name
`;

module.exports = collection;