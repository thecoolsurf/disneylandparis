/* backend/src/Model/Admin/Park/Create.js */

const park_create = `
CREATE TABLE IF NOT EXISTS park (
    'id' INT AUTO_INCREMENT, 
    'name' VARCHAR (255), 
    'slug' VARCHAR (255),
    'description' TEXT NULL,
    PRIMARY KEY ('id')
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`;

module.exports = park_create;