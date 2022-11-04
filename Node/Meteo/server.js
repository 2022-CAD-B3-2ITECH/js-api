"use strict";

// Imports / Requires
// --

// Import des modules
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const guessPort = require('./utils/ports');

// Instance des modules ou fonction
const app = express();
const port = 8080; //guessPort();


// App Setup 
// --

// Définition du répertoire de stockage des fichiers de vues
app.set('views', path.join(__dirname, "views"));

// Utilisation du moteur de rendu HTML
app.set('view engine', "html");

// Definition du moteur de rendu
app.engine('html', ejs.__express);

// Definition du répertoire public (css, js (front), images)
app.use( express.static( path.join( __dirname, "public" ) ) )


// Routing
// --

app.use(require('./controllers/now'));
app.use(require('./controllers/24h'));

app.use((request, response) => {
    response.status(404);
    response.send('Ooops document not found !')
});



// Start server App
// --

app.listen(port, () => console.log(`App is listening on port : http://127.0.0.1:${port}`));

// Export du port pour l'app electron
module.exports = port;