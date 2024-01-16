const park_update = `UPDATE park SET 
p.slug , p.name, p.description 
WHERE p.id = ?`;

module.exports = park_update;