CREATE TABLE attraction (
    `id` int NOT NULL,
    `id_cat` int,
    `name` VARCHAR(255),
    `url` VARCHAR(255),
    `description` VARCHAR (255), 
    `restriction` VARCHAR (255), 
    `pictures` VARCHAR (255), 
    `movies` VARCHAR (255), 
    PRIMARY KEY (`id`),
    CONSTRAINT FK_AttractionCategory FOREIGN KEY (`id_cat`)
    REFERENCES category(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
DELETE FROM attraction;
ALTER TABLE attraction AUTO_INCREMENT=1;


-- |  1 | Adventureland      | adventureland   |
-- |  2 | Discoveryland      | discoveryland   |
-- |  3 | Fantasyland        | fantasyland     |
-- |  4 | Frontierland       | Frontierland    |
-- |  5 | Main Street, U.S.A | main-street-usa

INSERT INTO attraction (`id`,`id_cat`,`name`,`url`,`description`,`restriction`,`pictures`,`movies`) VALUES
(1,1,'Adventure Isle','adventure-isle','Aventure en famille','Promenades relaxantes','picture1.jpg','movie.avi'),
(2,3,'Alice\'s Curious Labyrinth','alice-s-curious-labyrinth','Divertissement pour les plus petits','Pas de restriction', 'picture1.jpg', 'movie.avi'),
(3,2,'Autopia','autopia','Divertissement pour les plus petits','Taille: 0,80m','picture1.jpg','movie.avi'),
(4,4,'Big Thunder Mountain','big-thunder-mountain','Grands frissons','Taille: 1,02m','picture1.jpg','movie.avi'),
(5,3,'Blanche-Neige et les Sept Nains','blanche-neige-et-les-sept-nains','Aventure en famille. Peut effrayer les plus petits','Pas de restriction','picture1.jpg','movie.avi'),
(6,2,'Buzz Lightyear Laser Blast','buzz-lightyear-last-blast','Aventure en famille','Pas de restriction','picture1.jpg','movie.avi'),
(7,5,'Discovery Arcade Main Street - USA','discovery-arcade-main-street-usa','Aventure en famille','Pas de restriction','picture1.jpg','movie.avi'),
(8,5,'Disneyland Railroad','disneyland-railroad','Divertissement pour les plus petits','Pas de restriction','picture1.jpg','movie.avi'),
(9,3,'Dumbo the Flying Elephant','dumbo-the-flying-elephant','Divertissement pour les plus petits','Pas de restriction','picture1.jpg','movie.avi'),
(10,4,'Frontierland Playground','frontierland-playground','Divertissement pour les plus petits','Pas de restriction','picture1.jpg','movie.avi'),
(11,5,'Horse-Drawn Streetcars','horse-drawn-streetcarts','Divertissement pour les plus petits','Pas de restriction','picture1.jpg','movie.avi'),
(12,1,'Indiana Jones et le Temple du Péril','indiana-jones-et-le-temple-du-peril','Grands frissons','Taille: 1,40m','picture1.jpg','movie.avi'),
(13,3,'It\'s a small world','its-a-small-world','Divertissement pour les plus petits','Pas de restriction','picture1.jpg','movie.avi'),
(14,1,'La Cabane des Robinson','la-cabane-des-robinson','Aventure en famille','Pas de restriction','picture1.jpg','movie.avi'),
(15,3,'La Galerie de la Belle au Bois Dormant','la-galerie-de-la-belle-au-bois-dormant','Aventure en Famille','Pas de restriction','picture1.jpg','movie.avi'),
(16,1,'Le Galion des Pirates','le-galion-des-pirates','Aventure en Famille','Pas de restriction','picture1.jpg','movie.avi'),
(17,1,'La Plage des Pirates','la-plage-des-pirates','Divertissement pour les plus petits','Pas de restriction','picture1.jpg','movie.avi'),
(18,3,'La Tanière du Dragon','la-taniere-du-dragon','Peut effrayer les plus petits','Pas de restriction','picture1.jpg','movie.avi'),
(19,3,'Le Carrousel de Lancelot','le-carrousel-de-lancelot','Divertissement pour les plus petits','Pas de restriction','picture1.jpg','movie.avi'),
(20,3,'Le Château de la Belle au Bois Dormant','le-chateau-de-la-belle-au-bois-dormant','Aventure en famille','Pas de restriction','picture1.jpg','movie.avi'),
(21,1,'Le Passage Enchanté d\'Aladdin','le-passage-enchanté-d-aladdin','Divertissement pour les plus petits','Pas de restriction','picture1.jpg','movie.avi'),
(22,3,'Le Pays des Contes de Fées','le-pays-des-contes-de-fees','Aventure','Pas de restriction','picture1.jpg','movie.avi'),
(23,2,'Les Mystères du Nautilus','les-mysteres-du-nautilus','Divertissement pour les plus petits','Pas de restriction','picture1.jpg','movie.avi'),
(24,3,'Les Voyages de Pinocchio','les-voyages-de-pinocchio','Aventure en famille. Peut effrayer les plus petits','Pas de restriction','picture1.jpg','movie.avi'),
(25,5,'Les jardins féériques 	Main Street, U.S.A','les-jardins-feeriques-de-main-street-usa','Aventure en famille. Peut effrayer les plus petits','Pas de restriction','picture1.jpg','movie.avi'),
(26,5,'Liberty Arcade','liberty-arcade','Promenades relaxantes','Pas de restriction','picture1.jpg','movie.avi'),
(27,3,'Mad Hatter\'s Tea Cups','mad-hatter-s-tea-cups','Aventure en famille','Pas de restriction','picture1.jpg','movie.avi'),
(28,5,'Main Street Vehicles','main-street-vehicles','Divertissement pour les plus petits. Promenades relaxantes','Pas de restriction','picture1.jpg','movie.avi'),
(29,2,'Mickey et son Orchestre PhilharMagique','mickey-et-son-orchestre-philharmagique','Les visiteurs peuvent etre eclabousses','Pas de restriction','picture1.jpg','movie.avi'),
(30,2,'Orbitron','orbitron','Divertissement pour les plus petits','Pas de restriction','picture1.jpg','movie.avi'),
(31,3,'Pavillon des Princesses','pavillon-des-princesses','Divertissement pour les plus petits.','Pas de restriction','picture1.jpg','movie.avi'),
(32,3,'Peter Pan\'s Flight','peter-pan-s-flight','Voyage à faire dès son plus jeune âge en famille','Pas de restriction','picture1.jpg','movie.avi'),
(33,4,'Phantom Manor','phantom-manor','Peut effrayer les plus petits','Pas de restriction','picture1.jpg','movie.avi'),
(34,1,'Pirates of the Caribbean','pirates-of-caribbean','Les visiteurs peuvent etre eclabousses','Pas de restriction','picture1.jpg','movie.avi'),
(35,3,'Rencontre avec Mickey','rencontre-avec-myckey','Divertissement pour les plus petits.','Pas de restriction','picture1.jpg','movie.avi'),
(36,4,'Rustler Roundup Shootin','rustler-roundup-shootin','Aventure en Famille','Pas de restriction','picture1.jpg','movie.avi'),
(37,1,'Star Tours - l\'Aventure Continue','start-tours','Grands frissons','Taille: 1,02m','picture1.jpg','movie.avi'),
(38,2,'Star Wars Hyperspace Mountain','star-wars-hyperspace-mountain','Grands frissons','Taille: 1,20m','picture1.jpg','movie.avi'),
(39,2,'Starport - rencontre avec un Personnage StarWars','startport','Rencontrez un personnage StarWars','Pas de restriction','picture1.jpg','movie.avi'),
(40,4,'Thunder Mesa Riverboat Landing','thunder-mesa-riverboat-landing','Promenades relaxantes','Pas de restriction','picture1.jpg','movie.avi'),
(41,3,'CaseyJr – le Petit Train du Cirque','casy-jr-le-petit-train-du-cirque','Divertissement pour les plus petits','Pas de restriction','picture1.jpg','movie.avi');
