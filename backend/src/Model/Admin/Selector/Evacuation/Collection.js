/* backend/src/Model/Admin/Selector/Evacuation/Collection.js */

const collection = `
SELECT 
id, name, level, description 
FROM evacuation`;

module.exports = collection;