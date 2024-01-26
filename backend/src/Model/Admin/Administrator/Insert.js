/* backend/src/Model/Admin/Administrator/Insert.js */

const administrator_insert = `
INSERT INTO administrator 
('id','firstname','lastname','email','password','token') 
VALUES
(null, ?, ?, ?, ?, ?);`;

module.exports = administrator_insert;