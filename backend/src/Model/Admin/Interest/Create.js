/* backend/src/Model/Admin/Interest/Create.js */

const create = `
CREATE TABLE IF NOT EXISTS interest (
    'id' INT AUTO_INCREMENT, 
    'name' VARCHAR (255), 
    'description' TEXT NULL,
    PRIMARY KEY ('id')
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`;

module.exports = create;