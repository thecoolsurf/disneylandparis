/* backend/src/Model/Public/Navigation/AttractionAndUniversAndPark.js */

const navigation = `
SELECT 
a.id AS aid, a.slug AS aslug, a.route AS aroute, a.name AS aname,
u.id AS uid, u.slug AS uslug, u.name AS uname,
p.id AS pid, p.slug AS pslug, p.name AS pname, 
c.id AS cid, c.slug AS cslug, c.name AS cname
FROM attraction a
JOIN univers u ON u.id = a.id_univ 
JOIN park p ON p.id = a.id_park
JOIN category c ON c.id = a.id_category
`;

module.exports = navigation;