/* backend/src/Model/Admin/Attraction/Insert.js */

const attraction_insert = `
INSERT INTO attraction 
('id','id_park','id_univ','name','slug','public','description','restriction','pictures','movies') 
VALUES
(null, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

module.exports = attraction_insert;