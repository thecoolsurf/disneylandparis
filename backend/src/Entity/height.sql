CREATE TABLE height (
    `id` INT AUTO_INCREMENT, 
    `name` VARCHAR (255), 
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/* ******************************************************************* */
INSERT INTO height (`id`,`description`) VALUES
(null,'Taille: 81cm ou plus ET accompagné d’un adulte de 1m37 minimum.'),
(null,'Taille: 89cm ou plus grand.'),
(null,'Taille: 97cm ou plus grand.'),
(null,'Taille: 102cm ou plus grand.'),
(null,'Taille: 107cm ou plus grand.'),
(null,'Taille: 117cm ou plus grand.'),
(null,'Taille: 137cm ou plus grand pour faire l’attraction seul(e)');

ALTER TABLE `height` RENAME COLUMN `description` TO `name`;