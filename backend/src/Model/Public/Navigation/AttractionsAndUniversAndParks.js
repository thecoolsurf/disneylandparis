/* backend/src/Model/Public/Navigation/AttractionAndUniversAndPark.js */

const navigation = `
SELECT 
a.id AS aid, a.name AS aname, a.slug AS aslug, a.route AS aroute, 
u.id AS uid, u.name AS uname, u.slug AS uslug, u.route AS uroute, 
p.id AS pid, p.name AS pname, p.slug AS pslug, p.route AS proute, 
c.id AS cid, c.name AS cname, c.slug AS cslug, c.route AS croute
FROM attraction a
JOIN univers u ON u.id = a.id_univ 
JOIN park p ON p.id = a.id_park
JOIN category c ON c.id = a.id_category
ORDER BY a.name
`;

module.exports = navigation;