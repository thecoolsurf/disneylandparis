/* backend/src/Model/Admin/Entity/Attraction/Insert.js */

const insert = `
INSERT INTO attraction 
(id_park, id_univ, id_category, 
created, author,
slug, route, name, 
id_public, id_photopass, id_pmr, id_singlerider, 
premieraccess, 
duration, height, width, speed, ability, 
id_evacuation, id_height, id_sensory, 
handicaps, interests, description) 
VALUES
(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
`;

module.exports = insert;