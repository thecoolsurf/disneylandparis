/* backend/src/Model/Admin/Attributes/Category/Collection.js */

const collection = `
SELECT 
id, slug, name
FROM 
category
`;

module.exports = collection;