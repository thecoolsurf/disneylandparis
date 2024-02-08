/* backend/src/Model/Admin/User/Create */

const user_create = `
CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT, 
    firstname VARCHAR (255), 
    lastname VARCHAR (255), 
    email VARCHAR (255), 
    password VARCHAR (255), 
    born DATE NULL,
    date_start DATE NULL, 
    date_end DATE NULL, 
    date_current DATE NULL, 
    address VARCHAR (255) NULL, 
    zipcode VARCHAR (255) NULL, 
    city VARCHAR (255) NULL, 
    country VARCHAR (255) NULL, 
    PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;
`;

module.exports = user_create;