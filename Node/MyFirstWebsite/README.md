# My First Website

## Creation du projet

```shell
mkdir MyFirstWebsite
cd MyFirstWebsite
```

## Initialisation du projet pour Node

```shell
npm init
npm i express
npm i ejs
npm i --save-dev nodemon
npm i --save-dev electron
npm i --save-dev electron-builder
```

## Préparation des commandes NPM

Dans le fichier `package.json`, à la section `scripts`, ajouter:

```json
"scripts": {
    "serve": "nodemon server.js",
    "start": "electron .",
    "build": "electron-builder build --win",
}
```

- `serve`: `npm run serve` permet à node de déclencher le `nodemon` local du projet
- `start`: `npm run start` permet à node de déclencher `electron` local du projet (pour le dev)
- `build`: `npm run build` permet à node de déclencher le build final du projet electron

## Memo EJS

Execute du code JavaScript

```ejs
<% // code ejs %>
```

Affiche le contenu de la variable

```ejs
<%= variable %>
```

Inclusion de portion de code EJS

```ejs
<%- include('file.html') -%>
```
