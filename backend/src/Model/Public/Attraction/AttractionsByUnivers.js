const attractions_by_univers = `SELECT 
a.id AS aid, a.slug AS aslug, a.name AS aname 
FROM attraction a 
WHERE a.id_univ = ?`;

module.exports = attractions_by_univers;