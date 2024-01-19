const all_attractions_by_univers_and_park = `SELECT 
p.slug AS pslug, p.name AS pname, 
u.slug AS uslug, u.name AS uname, 
a.id, a.slug, a.name 
FROM attraction a 
JOIN park p ON p.id = a.id_park 
JOIN univers u ON u.id = a.id_univ 
WHERE a.id_univ = ?`;

module.exports = all_attractions_by_univers_and_park;