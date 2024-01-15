const attraction_by_id = `SELECT 
slug, name, public, description, restriction, pictures, movies 
FROM attraction 
WHERE id = ?`;

module.exports = attraction_by_id;