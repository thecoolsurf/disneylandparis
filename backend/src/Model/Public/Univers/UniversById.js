const univers_by_id = `SELECT 
slug, name, description 
FROM univers 
WHERE id = ?`;

module.exports = univers_by_id;