# FunctionalPenalty

## Fonctionnalités

- Simulation des tirs au but avec probabilité de réussite ou d'échec.

- Mise à jour immuable des scores après chaque tir.

- Gestion d'un historique retraçant le déroulement des tirs.

- Détection automatique de la victoire selon les règles du football (5 tirs ou prolongations).

- Affichage clair et détaillé de l'évolution des scores.

- Tests unitaires.

## Installation

Clonez le dépôt :

```
git clone https://github.com/Ishak-rav/FunctionalPenalty.git
cd FunctionalPenalty
```

Installez les dépendances :

``npm install``

Compilez le projet :

``npm run build``

Lancez l'application :

``npm start``

Exécutez les tests :

``npm test``

## Usage

Une fois l'application démarrée, elle simule une séance de tirs au but. Les scores et l'historique sont affichés dans la console, en respectant les règles suivantes :

- Chaque équipe effectue un tir à tour de rôle.

- La séance s'arrête si une équipe a un avantage décisif après 5 tirs.

- En cas d'égalité, la séance continue jusqu'à ce qu'un vainqueur soit déterminé.

## Contributeur

Ishak Chennouf / M2I 2 / MNS

## Technologies utilisées

- Langage : TypeScript

- Framework de test : Jest

- Gestionnaire de paquets : npm
