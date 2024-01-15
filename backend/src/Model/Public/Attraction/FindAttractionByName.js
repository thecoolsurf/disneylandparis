const find_attraction_by_name = `SELECT 
p.slug AS pslug, u.slug AS uslug, a.slug, a.name 
FROM attraction a 
JOIN park p ON p.id = a.id_park 
JOIN univers u ON u.id = a.id_univ 
AND a.name LIKE ? 
LIMIT 5`;

module.exports = find_attraction_by_name;