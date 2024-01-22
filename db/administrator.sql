CREATE TABLE administrator (
    `id` INT AUTO_INCREMENT, 
    `name` VARCHAR (255), 
    `email` VARCHAR (255), 
    `password` VARCHAR (255),
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/* ******************************************************************* */
INSERT INTO administrator (`id`,`name`,`email`,`password`) VALUES
(null,'admin','hdouin@free.fr','pass');
