/* backend/src/Model/Admin/User/Collection.js */

const collection = `
SELECT 
id, firstname, lastname, email, mobile, password, 
born, date_start, date_end, date_current, address, zipcode, city, country 
FROM user`;

module.exports = collection;