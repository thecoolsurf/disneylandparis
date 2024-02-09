/* backend/src/Model/Admin/Category/Create.js */

const create = `
CREATE TABLE IF NOT EXISTS category (
    id INT AUTO_INCREMENT, 
    name VARCHAR (255), 
    slug VARCHAR (255), 
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`;

module.exports = create;

