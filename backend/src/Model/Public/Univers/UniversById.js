const univers_by_id = `SELECT 
id, slug, name, description 
FROM univers 
WHERE id = ?`;

module.exports = univers_by_id;