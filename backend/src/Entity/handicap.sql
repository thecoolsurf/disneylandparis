CREATE TABLE IF NOT EXISTS handicap (
    `id` INT AUTO_INCREMENT, 
    `description` VARCHAR (255), 
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/* ******************************************************************* */
INSERT INTO handicap (`id`,`description`) VALUES
(null,'Autonomie de marche requise'),
(null,'Embarquement possible avec votre fauteuil roulant'),
(null,'Transfert indispensable'),
(null,'Planche de transfert disponible, adressez-vous à l’un de nos Cast Members'),
(null,'Chien-guide et d’assistance admis'),
(null,'Attraction comportant des zones très sombres'),
(null,'Temps de transfert maximum requis'),
(null,'Présence de marches'),
(null,'Ascenseur'),
(null,'Effets de lumières stroboscopiques'),
(null,'Risque d’éclaboussures'),
(null,'Attraction équipée d’une Boucle à Induction Magnétique'),
(null,'Toilettes accessibles aux personnes en situation de handicap'),
(null,'Langue des Signes Française disponible, sous condition (renseignements à Studio services)'),
(null,'Premiers Soins. Change enfant de plus de 3 ans et adulte possible'),
(null,'Défibrilateur Automatisé Externe'),
(null,'Coin Bébés Rendez-vous Enfants Perdus'),
(null,'Location de Poussettes et de Fauteuils Roulants'),
(null,'Bornes de rechargement téléphones mobiles: voir conditions sur place (payant)');
