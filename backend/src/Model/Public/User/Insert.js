/* backend/src/Model/Public/User/Insert.js */

const user_insert = `
INSERT INTO user 
(firstname, lastname, email, mobile, password, born, date_start, date_end, date_current, address, zipcode, city, country) 
VALUES 
(?,?,?,?,?,?,?,?,?,?,?,?,?);
`;

module.exports = user_insert;