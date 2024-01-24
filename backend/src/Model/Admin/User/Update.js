const update = `
UPDATE user SET 
firstname = ?, lastname = ?, email = ?, password = ?, born = ?, date_start = ?, date_end = ?
WHERE id = ?`;

module.exports = update;
