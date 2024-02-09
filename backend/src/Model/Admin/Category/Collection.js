/* backend/src/Model/Admin/Category/Collection.js */

const collection = `
SELECT 
id, slug, name
FROM 
category
`;

module.exports = collection;