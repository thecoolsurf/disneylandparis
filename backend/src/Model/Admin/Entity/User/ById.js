/* backend/src/Model/Admin/Entity/User/ById.js */

const by_id = `
SELECT 
id, firstname, lastname, email, mobile, password, 
born, date_start, date_end, date_current, address, zipcode, city, country
FROM user
WHERE id = ?`;

module.exports = by_id;