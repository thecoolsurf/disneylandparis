CREATE TABLE administrator (
    `id` INT AUTO_INCREMENT, 
    `firstname` VARCHAR (255), 
    `lastname` VARCHAR (255), 
    `email` VARCHAR (255), 
    `password` VARCHAR (255),
    `token` VARCHAR (255),
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/* ******************************************************************* */
INSERT INTO administrator (`id`,`firstname`,`lastname`,`email`,`password`,`token`) VALUES
(null,'Hubert','DOUIN','hdouin@free.fr','pass','token');
