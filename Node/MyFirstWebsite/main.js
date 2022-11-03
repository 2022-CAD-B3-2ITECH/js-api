"use strict";

// Imports / Requires
// --

// Import + Instance de ExpressJS
const express = require('express');
const app = express();

const ejs = require('ejs');

const guessPort = require('./utils/ports');
// const port = guessPort();
const port = 8080;


// App Setup 
// --




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