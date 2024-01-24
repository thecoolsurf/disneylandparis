const administrator_by_id = `SELECT * 
FROM administrator
WHERE id = ?`;

module.exports = administrator_by_id;