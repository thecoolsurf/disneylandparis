CREATE TABLE user (
    `id` INT AUTO_INCREMENT, 
    `firstname` VARCHAR (255), 
    `lastname` VARCHAR (255), 
    `email` VARCHAR (255), 
    `password` VARCHAR (255), 
    `born` DATE,
    `date_start` DATE, 
    `date_end` DATE, 
    `date_current` DATE, 
    `address` VARCHAR (255), 
    `zipcode` VARCHAR (255), 
    `city` VARCHAR (255), 
    `country` VARCHAR (255), 
    PRIMARY KEY (id)
) ENGINE=InnoDB;

INSERT INTO user 
(`id`,`firstname`,`lastname`,`email`,`password`,`born`,`date_start`,`date_end`,`date_current`,`address`,`zipcode`,`city`,`country`) 
VALUES
(null,'Marjorie','EYMANN','marjorie.eymann@gmail.com','pass','1979-10-22','2024-01-01','2025-01-01','2024-01-17','33 rue Claude Tillier','75012','Paris','France'),
(null,'Hubert','DOUIN','hdouin@free.fr','pass','1966-06-13','2024-01-01','2025-01-01','2024-01-17','33 rue Claude Tillier','75012','Paris','France'),
