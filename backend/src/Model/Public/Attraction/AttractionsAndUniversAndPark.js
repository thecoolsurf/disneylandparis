const navigation = `SELECT 
a.id AS aid, a.slug AS aslug, a.name AS aname,
p.id AS pid, p.slug AS pslug, p.name AS pname, 
u.id AS uid, u.id_park, u.slug AS uslug, u.name AS uname 
FROM attraction a 
JOIN univers u ON u.id = a.id_univ
JOIN park p ON p.id = a.id_park`;

module.exports = navigation;