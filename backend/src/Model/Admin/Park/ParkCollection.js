const park_collection = `SELECT 
    id, name, slug, description 
    FROM park
    ORDER BY id`;

module.exports = park_collection;