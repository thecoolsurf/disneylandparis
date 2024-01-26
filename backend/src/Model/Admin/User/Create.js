/* backend/src/Model/Admin/User/Create */

const user_create = `
CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT, 
    firstname VARCHAR (255), 
    lastname VARCHAR (255), 
    email VARCHAR (255), 
    password VARCHAR (255), 
    born DATE,
    date_start DATE, 
    date_end DATE, 
    date_current DATE, 
    address VARCHAR (255), 
    zipcode VARCHAR (255), 
    city VARCHAR (255), 
    country VARCHAR (255), 
    PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;
`;

module.exports = user_create;