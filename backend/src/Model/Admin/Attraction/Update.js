const update = `SELECT 
id, slug, name, public, description, restriction, pictures, movies
FROM attraction
WHERE id = ?`;

module.exports = update;