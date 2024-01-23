const attraction_by_id = `SELECT 
id, id_park, id_univ, slug, name, public, description, restriction, pictures, movies 
FROM attraction 
WHERE id = ?`;

module.exports = attraction_by_id;