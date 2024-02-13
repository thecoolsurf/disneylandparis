/* backend/src/Model/Public/Home/Datas.js */

const home = `
SELECT 
u.id AS uid, u.slug AS uslug, u.route AS uroute, u.name AS uname,
p.id AS pid, p.slug AS pslug, p.name AS pname, p.title, p.description 
FROM univers u 
JOIN park p ON p.id = u.id_park
`;

module.exports = home;