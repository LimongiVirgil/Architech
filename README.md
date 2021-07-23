# Architech (Front)

## Disclaimer

**Ce site a été réalisé à des fins pédagogiques dans le cadre du cursus Bachelor de l’école HETIC. Les contenus présentés n'ont pas fait l'objet d'une demande de droit d'utilisation. Ce site ne sera en aucun cas exploité à des fins commerciales et ne sera pas publié**

## Lien du projet en ligne

https://architech-groupe8.netlify.app/

## Equipe

* MARQUAND Camille 
* TAPIA Rodrigo
* LEMIRE Tristan
* AGNAN Pierre-Alain
* LIMONGI Virgil
* EVANO Thomas
* BEN KEBAIER Selima
* TOMBUYSES Emilie

## Speech

Solution dont les clients sont les groupes scolaires / l’éducation nationale. La plateforme vise à faire le suivi de la vie d'un bâtiment.
Grâce à la technologie à notre disposition, il sera possible d'identifier les faiblesses des bâtisses et de prioriser les rénovations sur ces dernières.

Afin d’identifier les améliorations à apporter aux édifices, notre plateforme reçoit des données de plusieurs capteurs (type IoT) disposés dans les établissements partenaires. Ces détecteurs prennent en compte un certain nombre de paramètres identifiés comme accélérateurs d’affaiblissement des bâtisses.

Ces mesures sont mises en relations avec des renseignements complémentaires, tels que la date et les matériaux de constructions, l'état et la date de la peinture, l'usage et l'usure des surfaces, etc.
Ces incidents peuvent être de différentes natures : 

fuite d’eau
fuite de gaz
faible connexion internet
fuite de chaleur dans une pièce
taux d’humidité
nombre d’appareils défectueux
panne de courant


## Quelles parties comptez-vous présenter pour le livrable ? Quelles parties seront réalisées et fonctionnelles, quelles parties seront uniquement prototypées, quelles parties ne seront pas traitées ?

### Ce que l’on compte présenter : un tableau de bord destiné à une école comprenant :
- affichage des différents types d’incidents au cours du dernier mois sous
forme de graphique
- affichage détaillé des différents types d’incidents avec leur status (en cours,
assigné à réparation ou terminé) trié par type de capteur
- affichage de l’évolution du nombre d’incidents avec la semaine précédente
- affichage de l’évolution des incidents par mois sur 1 an sous forme de
graphique
- affichage d’un aperçu des réparations à venir (sorte de calendrier)
- affichage des données de l’établissement
- affichage des données en temps réel de ces capteurs par salle


### Ce qui sera prototypé :
- une liste des incidents à examiner (en vue d’une réparation)
- ajouter une date de réparation à un calendrier pour un évènement


### Ce qui ne sera pas traité :
- ajouter/supprimer des capteurs
- ajouter/supprimer des salles de classe
- gestion de paramètres de détection d’incident
- affichage des états des capteurs

## Installation

- Cloner le projet
- A la racine du projet: `npm i`
- Créer un fichier `.env` a la racine du projet et suivre les instructions du fichier `.env.example`
- Démarrer ler projet: `npm run dev`
