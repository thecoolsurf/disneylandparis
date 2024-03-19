/* backend/src/Model/Admin/Entity/Attraction/Collection.js */

const collection = `
SELECT 
a.id, a.name, a.route, 
p.name AS pname, u.name AS uname, c.name AS cname, o.name AS oname
FROM attraction a
JOIN park p ON p.id = a.id_park
JOIN univers u ON u.id = a.id_univ
JOIN category c ON c.id = a.id_category
JOIN origin o ON o.id = a.id_origin
ORDER BY a.name
`;

module.exports = collection;