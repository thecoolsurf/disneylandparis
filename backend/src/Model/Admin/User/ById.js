const user_by_id = `
SELECT * FROM user
WHERE id = ?`;

module.exports = user_by_id;