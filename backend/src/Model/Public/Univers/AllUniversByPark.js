/* backend/src/Model/Public/Univers/AllUniversByPark.js */

const all_univers_by_park = `
SELECT 
u.id, u.name, u.slug, p.slug AS pslug, p.name AS pname 
FROM univers AS u 
JOIN park AS p ON p.id = u.id_park 
AND p.id = ? 
ORDER BY u.name`;

module.exports = all_univers_by_park;