/* backend/src/Model/Admin/Park/Collection.js */

const collection = `
SELECT 
id, name, slug, title, description
FROM park`;

module.exports = collection;