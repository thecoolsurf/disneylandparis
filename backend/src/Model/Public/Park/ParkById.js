const park_by_id = `SELECT 
p.id AS pid, p.slug AS pslug, p.name AS pname, p.description, 
u.id AS uid, u.slug AS uslug, u.name AS uname, u.route AS uroute
FROM park p 
JOIN univers u ON p.id = u.id_park
WHERE p.id = ?`;

module.exports = park_by_id;