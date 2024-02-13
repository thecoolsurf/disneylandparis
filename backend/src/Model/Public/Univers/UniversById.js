/* backend/src/Model/Public/Univers/UniversById.js */

const univers_by_id = `
SELECT 
id AS uid, name AS uname, slug AS uslug, route AS uroute, description 
FROM univers 
WHERE id = ?
`;

module.exports = univers_by_id;