const attractions_by_univers = `SELECT 
a.id, a.slug, a.name 
FROM attraction a 
WHERE a.id_univ = ?`;

module.exports = attractions_by_univers;