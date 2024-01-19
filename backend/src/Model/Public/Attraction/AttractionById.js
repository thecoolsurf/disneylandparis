// Model/Public/Attraction

const attraction_by_id = `SELECT 
a.id, a.slug, a.name, a.public, a.description, a.restriction, a.pictures, a.movies 
FROM attraction a
WHERE a.id = ?`;

module.exports = attraction_by_id;