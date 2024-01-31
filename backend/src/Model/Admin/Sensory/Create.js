/* backend/src/Model/Admin/Sensory/Create.js */

const create = `
CREATE TABLE IF NOT EXISTS 'sensory' (
    'id' INT AUTO_INCREMENT, 
    'name' VARCHAR(255),
    'description' VARCHAR (255), 
    PRIMARY KEY ('id')
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`;

module.exports = create;