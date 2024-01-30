/* backend/src/Model/Admin/Administrator/Create.js */

const create = `
CREATE TABLE IF NOT EXISTS administrator (
    'id' INT AUTO_INCREMENT, 
    'firstname' VARCHAR (255), 
    'lastname' VARCHAR (255), 
    'email' VARCHAR (255), 
    'password' VARCHAR (255),
    'token' VARCHAR (255),
    PRIMARY KEY ('id')
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`;

module.exports = create;