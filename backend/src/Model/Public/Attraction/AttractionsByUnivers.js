const attractions_by_univers = `
SELECT 
a.id AS aid, a.name AS aname, a.slug AS aslug, a.route AS aroute
FROM attraction a 
WHERE a.id_univ = ?
`;

module.exports = attractions_by_univers;