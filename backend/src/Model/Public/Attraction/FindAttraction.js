const find_attraction = `
SELECT 
a.name, a.route 
FROM attraction a 
WHERE a.name LIKE ? 
LIMIT 5
`;

module.exports = find_attraction;