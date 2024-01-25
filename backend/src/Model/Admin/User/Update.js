const update = `
UPDATE user SET 
firstname = ?, lastname = ?, email = ?, mobile = ?, password = ?, 
born = ?, date_start = ?, date_end = ?, date_current = ?, 
address = ?, zipcode = ?, city = ?, country = ?
WHERE id = ?`;

module.exports = update;
