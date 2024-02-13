/* backend/src/Model/Admin/Attributes/Evacuation/Collection.js */

const collection = `
SELECT 
id, name, level, description 
FROM evacuation`;

module.exports = collection;