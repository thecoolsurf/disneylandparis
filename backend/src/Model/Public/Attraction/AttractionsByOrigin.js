const attractions_by_origin = `
SELECT 
a.id AS aid, a.name AS aname, a.slug AS aslug, a.route AS aroute,
p.name AS pname, 
u.name AS uname, 
c.name AS cname,
o.name AS oname
FROM attraction a 
JOIN park p ON p.id = a.id_park
JOIN univers u ON u.id = a.id_univ
JOIN category c ON c.id = a.id_category
JOIN origin o ON o.id = a.id_origin
WHERE a.id_origin = ?
ORDER BY o.name ASC
`;

module.exports = attractions_by_origin;