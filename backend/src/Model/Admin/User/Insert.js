/* backend/src/Model/Admin/User/Insert */

const user_insert = `
INSERT INTO user 
('id','firstname','lastname','email','password','born','date_start','date_end','date_current','address','zipcode','city','country') 
VALUES 
(null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

module.exports = user_insert;