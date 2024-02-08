/* backend/src/Model/Admin/Attraction/Insert.js */

const insert = `
INSERT INTO attraction 
(id_park, id_univ, name, slug, route, public, id_evacuation, id_height, id_sensory, handicaps, interests, description, pictures, movies) 
VALUES
(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
`;

module.exports = insert;