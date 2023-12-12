CREATE TABLE user (
    id INT AUTO_INCREMENT, 
    firstname VARCHAR (255), 
    lastname VARCHAR (255), 
    email VARCHAR (255), 
    password VARCHAR (255), 
    born DATE,
    date_start DATE, 
    date_end DATE, 
    date_current DATE, 
    pictures VARCHAR (255), 
    movies VARCHAR (255), 
    PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE attraction (
    id INT AUTO_INCREMENT, 
    url VARCHAR (255), 
    name VARCHAR (255), 
    description VARCHAR (255), 
    public VARCHAR (255), 
    restriction VARCHAR (255), 
    pictures VARCHAR (255), 
    movies VARCHAR (255), 
    PRIMARY KEY (id)
) ENGINE=InnoDB;