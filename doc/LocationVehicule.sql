
CREATE TABLE points (
                id INT AUTO_INCREMENT NOT NULL,
                longitude FLOAT NOT NULL,
                latitude FLOAT NOT NULL,
                PRIMARY KEY (id)
);


CREATE TABLE parcours (
                id INT NOT NULL,
                nom VARCHAR(30) NOT NULL,
                difficulte INT NOT NULL,
                categorie VARCHAR(30) NOT NULL,
                PRIMARY KEY (id)
);


CREATE TABLE parcours_points (
                id INT NOT NULL,
                ref VARCHAR(30) NOT NULL,
                parcours INT NOT NULL,
                point INT NOT NULL,
                pause BOOLEAN,
                duree TIME,
                PRIMARY KEY (id)
);


CREATE TABLE types (
                id INT AUTO_INCREMENT NOT NULL,
                nom VARCHAR(30) NOT NULL,
                description TEXT NOT NULL,
                PRIMARY KEY (id)
);


CREATE TABLE etats (
                id INT AUTO_INCREMENT NOT NULL,
                roues VARCHAR(255),
                freins VARCHAR(255),
                cadre VARCHAR(255),
                etatMecanique VARCHAR(255),
                selle VARCHAR(255),
                batterie VARCHAR(255),
                description TEXT NOT NULL,
                PRIMARY KEY (id)
);


CREATE TABLE locations (
                id INT NOT NULL,
                typeId INT NOT NULL,
                etatId INT NOT NULL,
                nom VARCHAR(30) NOT NULL,
                description VARCHAR(255) NOT NULL,
                numSerie VARCHAR(30) NOT NULL,
                prix INT NOT NULL,
                PRIMARY KEY (id)
);


CREATE TABLE roles (
                id INT AUTO_INCREMENT NOT NULL,
                nom VARCHAR(30) NOT NULL,
                PRIMARY KEY (id)
);


CREATE TABLE utilisateurs (
                id INT NOT NULL,
                nom VARCHAR(30) NOT NULL,
                prenom VARCHAR(30) NOT NULL,
                adresse VARCHAR(255) NOT NULL,
                codePostal INT NOT NULL,
                genre VARCHAR(30) NOT NULL,
                numCarteIdentite VARCHAR(255) NOT NULL,
                numPermisConduire VARCHAR(255) NOT NULL,
                roleId INT NOT NULL,
                email VARCHAR(255) NOT NULL,
                mdp VARCHAR(255) NOT NULL,
                PRIMARY KEY (id)
);


CREATE TABLE reservations (
                id INT AUTO_INCREMENT NOT NULL,
                locataire INT NOT NULL,
                vehiculeLoue INT NOT NULL,
                dateDebut DATETIME NOT NULL,
                dateFin DATETIME NOT NULL,
                caution BOOLEAN NOT NULL,
                prixTotal INT NOT NULL,
                dateRendu DATETIME NOT NULL,
                PRIMARY KEY (id)
);


ALTER TABLE parcours_points ADD CONSTRAINT points_parcours_points_fk
FOREIGN KEY (point)
REFERENCES points (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE parcours_points ADD CONSTRAINT parcours_parcours_points_fk
FOREIGN KEY (parcours)
REFERENCES parcours (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE locations ADD CONSTRAINT types_vehicules_fk
FOREIGN KEY (typeId)
REFERENCES types (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE locations ADD CONSTRAINT etats_vehicules_fk
FOREIGN KEY (etatId)
REFERENCES etats (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE reservations ADD CONSTRAINT vehicules_reservations_fk
FOREIGN KEY (vehiculeLoue)
REFERENCES locations (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE utilisateurs ADD CONSTRAINT roles_utilisateurs_fk
FOREIGN KEY (roleId)
REFERENCES roles (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE reservations ADD CONSTRAINT utilisateurs_reservations_fk
FOREIGN KEY (locataire)
REFERENCES utilisateurs (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;
