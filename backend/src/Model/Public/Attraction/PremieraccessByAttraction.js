/* backend/src/Model/Public/Attraction/PremieraccessByAttraction.js */

const premieraccessByAttraction = `
SELECT 
name, description
FROM premieraccess
WHERE id IN (1,3)
`;

module.exports = premieraccessByAttraction;