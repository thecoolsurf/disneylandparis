const univers_by_id = `
SELECT 
id AS uid, slug AS uslug, name AS uname, description 
FROM univers 
WHERE id = ?`;

module.exports = univers_by_id;