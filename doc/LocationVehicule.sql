
CREATE TABLE points (
                id INT AUTO_INCREMENT NOT NULL,
                longitude DOUBLE NOT NULL,
                latitude DOUBLE NOT NULL,
                PRIMARY KEY (id)
);


CREATE TABLE parcours (
                id INT AUTO_INCREMENT NOT NULL,
                nom VARCHAR(30) NOT NULL,
                difficulte INT NOT NULL,
                categorie VARCHAR(30) NOT NULL,
                duree TIME,
                PRIMARY KEY (id)
);


CREATE TABLE parcours_points (
                id INT AUTO_INCREMENT NOT NULL,
                ref VARCHAR(30) NOT NULL,
                parcours INT NOT NULL,
                point_id INT NOT NULL,
                pause BOOLEAN,
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
                type_id INT NOT NULL,
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
                id INT AUTO_INCREMENT NOT NULL,
                type_id INT NOT NULL,
                etat_id INT NOT NULL,
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
                id INT AUTO_INCREMENT NOT NULL,
                nom VARCHAR(30) NOT NULL,
                prenom VARCHAR(30) NOT NULL,
                adresse VARCHAR(255) NOT NULL,
                codePostal INT NOT NULL,
                genre ENUM('Homme', 'Femme', 'Autre'),
                numCarteIdentite VARCHAR(255) NOT NULL,
                numPermisConduire VARCHAR(255) NOT NULL,
                role_id INT NOT NULL,
                email VARCHAR(255) NOT NULL,
                mdp VARCHAR(255) NOT NULL,
                PRIMARY KEY (id)
);


CREATE TABLE reservations (
                id INT AUTO_INCREMENT NOT NULL,
                utilisateur_id INT NOT NULL,
                type_id INT NOT NULL,
                dateDebut DATETIME NOT NULL,
                dateFin DATETIME NOT NULL,
                caution BOOLEAN NOT NULL,
                prixTotal INT NOT NULL,
                dateRendu DATETIME NOT NULL,
                PRIMARY KEY (id)
);


ALTER TABLE parcours_points ADD CONSTRAINT points_parcours_points_fk
FOREIGN KEY (point_id)
REFERENCES points (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE parcours_points ADD CONSTRAINT parcours_parcours_points_fk
FOREIGN KEY (parcours)
REFERENCES parcours (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE locations ADD CONSTRAINT types_vehicules_fk
FOREIGN KEY (type_id)
REFERENCES types (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE locations ADD CONSTRAINT etats_vehicules_fk
FOREIGN KEY (etat_id)
REFERENCES etats (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE reservations ADD CONSTRAINT vehicules_reservations_fk
FOREIGN KEY (type_id)
REFERENCES locations (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE utilisateurs ADD CONSTRAINT roles_utilisateurs_fk
FOREIGN KEY (role_id)
REFERENCES roles (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE reservations ADD CONSTRAINT utilisateurs_reservations_fk
FOREIGN KEY (utilisateur_id)
REFERENCES utilisateurs (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;
