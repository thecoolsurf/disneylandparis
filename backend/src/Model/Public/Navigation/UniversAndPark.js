const navigation = `SELECT 
u.id AS uid, u.id_park, u.slug AS uslug, u.name AS uname,
p.id AS pid, p.slug AS pslug, p.name AS pname 
FROM univers u 
JOIN park p ON p.id = u.id_park`;

module.exports = navigation;