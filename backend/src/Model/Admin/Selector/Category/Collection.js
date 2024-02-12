/* backend/src/Model/Admin/Selector/Category/Collection.js */

const collection = `
SELECT 
id, slug, name
FROM 
category
`;

module.exports = collection;