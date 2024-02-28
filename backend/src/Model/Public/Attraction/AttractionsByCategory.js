const attractions_by_category = `
SELECT 
a.id AS aid, a.name AS aname, a.slug AS aslug, a.route AS aroute,
p.name AS pnname, 
u.name AS uname, 
c.name AS cname
FROM attraction a 
JOIN park p ON p.id = a.id_park
JOIN univers u ON u.id = a.id_univ
JOIN category c ON c.id = a.id_category
WHERE a.id_category = ?
`;

module.exports = attractions_by_category;