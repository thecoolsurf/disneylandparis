const all_attractions_by_univers = `SELECT 
p.slug AS pslug, p.name AS pname, 
u.slug AS uslug, u.name AS uname, 
a.slug, a.id, a.name, a.description, a.restriction 
FROM attraction a 
JOIN univers u ON u.id = a.id_univ 
JOIN park p ON p.id = u.id_park 
WHERE p.id = ?`;

module.exports = all_attractions_by_univers;