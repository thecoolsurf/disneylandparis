/* backend/src/Model/Public/Attraction/InterestsByAttraction.js */

const interestsByAttraction = `
SELECT 
name, description
FROM interest
WHERE id IN(1,5)
`;

module.exports = interestsByAttraction;