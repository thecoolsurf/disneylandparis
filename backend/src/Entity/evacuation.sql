CREATE TABLE IF NOT EXISTS evacuation (
    `id` INT AUTO_INCREMENT, 
    `index` SMALLINT(10), 
    `description` VARCHAR (255), 
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/* ******************************************************************* */
INSERT INTO evacuation (`id`,`index`,`description`) VALUES
(null,1,'Evacuation faciles: peu de distance à parcourir, peu de marches, dans des lieux ouverts et clairs. L’évacuation de l’attraction correspond à la sortie normale.'),
(null,2,'Evacuation difficile: comportant des cheminements sombres et étroits, des escaliers, pour rejoindre l’entrée de l’attraction. Le débarquement du véhicule peut s’effectuer partout dans le parcours de l’attraction'),
(null,3,'Evacuation complexes: nombreux cheminements sombres et étroits, nombreux escaliers pour rejoindre l’entrée de l’attraction. Le débarquement du véhicule peut s’effectuer par une échelle, un bateau, une plateforme.');
