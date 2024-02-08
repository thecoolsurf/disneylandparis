/* backend/src/Model/Admin/Evacuation/Create.js */

const create = `
CREATE TABLE IF NOT EXISTS evacuation (
    'id' INT AUTO_INCREMENT, 
    'name' VARCHAR (255), 
    'level' SMALLINT(10), 
    'description' VARCHAR (255), 
    PRIMARY KEY ('id')
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`;

module.exports = create;