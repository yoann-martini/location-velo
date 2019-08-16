# locationvelo

## Brief
L'application doit avoir 3 interfaces : admin, vendeur, client.  
 Cette application permet de louer des vélos.  
 
 
  les fonctionnalités :   
admin : tous les droits  
vendeur : checker l'état et la disponibilité des véhicules  
utilisateur : louer des véhicules et accessoires

## Tâches

~~Cannot POST /admin/parcours/parcours/add : Etienne~~
~~page etat ne fonctionne pas : Etienne~~
- page reservation, l edit ne fonctionne pas : Etienne
- page utilisateur, l add ne fonctionne pas : Ando et Océane
- page location edit ne marche pas : Yoann
- page parcours : regarder personnaliser
- role à revoir ?

 ## Sequelize

Cette commande vous invite à indiquer un certain nombre d'éléments, tels que le nom et la version de votre application.
> npm init

Entrez app.js, ou ce que vous voulez que le nom du fichier principal soit.
entry point: (index.js) app.js

Le --save drapeau enregistrera ces paquets dans la dependencies section de votre package.json fichier.
> npm install --save express body-parser morgan

Nous aurons besoin d’un moyen de redémarrer le serveur chaque fois que nous modifierons quelque chose dans notre code.
> npm i -D nodemon

Pour amorcer le projet pour nous. Cela nous aidera également à générer des migrations de bases de données .
> npm install -g sequelize-cli

Sequelize est un ORM de dialecte multi-SQL facile à utiliser pour Node.js.
Nous allons utiliser MySQL comme base de données. Laissons installer Sequelize ORM et le dialecte mysql2.
> npm install --save sequelize

> npm install --save mysql2

> npm install --save -g mysql

Après l’installation, laissez l’interface CLI générer des migrations, des sources, des répertoires config et models et un fichier config.
> sequelize init // final, Initializes project with sequelize cil

Génération de modèle
> npm install -g sequelize-auto

> sequelize-auto -o "./models" -d sequelize_auto_test -h localhost -u my_username -p 5432 -x my_password -e postgres

### Site côté admin

#### Gestion des rôles

- Associer un rôle à un utilisateur
- Lister un rôle
- Créer un nouveau rôle
- Supprimer un rôle
- Editer un rôle

#### Menu client
  
- Lister
- Ajouter
- Supprimer
- Editer
  
#### Réservation
  
- Lister
- Ajouter
- Supprimer
- Editer
  
  
