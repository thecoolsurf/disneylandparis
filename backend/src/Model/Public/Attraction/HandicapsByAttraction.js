/* backend/src/Model/Public/Attraction/HandicapsByAttraction.js */

const interestsByAttraction = `
SELECT 
name, description
FROM handicap
WHERE id IN(1,6,10)
`;

module.exports = interestsByAttraction;