const user_by_id = `SELECT 
id, firstname, lastname, email, mobile, password, 
born, date_start, date_end, date_current, 
address, zipcode, city, country
FROM user
WHERE id = ?`;

module.exports = user_by_id;