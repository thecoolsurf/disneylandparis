const park_by_id = `SELECT 
p.slug , p.name, p.description 
FROM park p 
WHERE p.id = ?`;

module.exports = park_by_id;