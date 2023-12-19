CREATE TABLE park (
    `id` INT AUTO_INCREMENT, 
    `name` VARCHAR (255), 
    `url` VARCHAR (255), 
    PRIMARY KEY (`id`)
) ENGINE=InnoDB;

/* ******************************************************************* */
INSERT INTO park (id,name,url) 
VALUES
(null,'Parc Disneyland','park-disneyland'),
(null,'Walt Disney Studios','walt-disney-studio');
