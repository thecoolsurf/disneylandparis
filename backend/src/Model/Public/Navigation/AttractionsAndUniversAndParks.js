const navigation = `
SELECT 
a.id AS aid, a.slug AS aslug, a.name AS aname,
u.id AS uid, u.slug AS uslug, u.name AS uname,
p.id AS pid, p.slug AS pslug, p.name AS pname 
FROM attraction a
JOIN univers u ON u.id = a.id_univ 
JOIN park p ON p.id = a.id_park`;

module.exports = navigation;