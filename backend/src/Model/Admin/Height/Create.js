/* backend/src/Model/Admin/Handicap/Create.js */

const create = `
CREATE TABLE IF NOT EXISTS height (
    'id' INT AUTO_INCREMENT, 
    'description' VARCHAR (255), 
    PRIMARY KEY ('id')
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`;

module.exports = create;