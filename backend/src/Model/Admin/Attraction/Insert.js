/* backend/src/Model/Admin/Attraction/Insert.js */

const insert = `
INSERT INTO attraction 
(id_park, id_univ, name, slug, public, description, restriction, pictures, movies) 
VALUES
(?, ?, ?, ?, ?, ?, ?, ?, ?);
`;

module.exports = insert;