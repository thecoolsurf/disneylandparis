CREATE TABLE IF NOT EXISTS interest (
    `id` INT AUTO_INCREMENT, 
    `name` VARCHAR (255), 
    `description` TEXT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/* ******************************************************************* */
INSERT INTO interest (`id`,`name`,`description`) VALUES
(null,'Grands frissons','Attraction à sensation de type montagne russe.'),
(null,'Peut effrayer les petits','Attraction à sensation de type montagne russe.'),
(null,'Aventure en famille','Attraction détente adaptées aux familles avec enfants.'),
(null,'Divertissement pour les petits','Attraction adaptée aux plus petits.'),
(null,'À ne pas rater','Attraction à succès prisée par les visiteurs.'),
(null,'Les visiteurs peuvent être éclaboussés','Attraction comprenant des effets de projection d’eau pouvant éclabousser les participants'),
(null,'Personnages Disney™','Attraction avec la présence de personnages de l’univers de Disney™'),
(null,'Disney PhotoPass™','Attraction bénéficiant d’un service de photos souvenir pour les participants');