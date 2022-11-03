"use strict";

// Imports / Requires
// --

// Import + Instance de ExpressJS
const express = require('express');
const app = express();

const ejs = require('ejs');
const path = require('path');

const guessPort = require('./utils/ports');
const port = guessPort();
// const port = 8080;


// App Setup 
// --

// Définition du répertoire de stockage des fichiers de vues
app.set('views', path.join(__dirname, "views"));

// Utilisation du moteur de rendu HTML
app.set('view engine', "html");

// Definition du moteur de rendu
app.engine('html', ejs.__express);



// Routing
// --

app.use(require('./controllers/homepage'));
app.use(require('./controllers/about'));
app.use(require('./controllers/terms'));

app.use((request, response) => {
    response.status(404);
    response.send('Ooops document not found !')
});



// Start server App
// --

app.listen(port, () => console.log(`App is listening on port : http://127.0.0.1:${port}`));

module.exports = port;