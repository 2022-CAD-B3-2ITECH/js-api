// Niveaux d'installation de node
// --
// -> c:\programmes\node_modules\
// -> c:\users\bob\node_modules\fs\
// -> c:\documents\project\MyAwesomeProject\node_modules\



// Import du module FileSystem de NodeJS
// const fs = require('fs');
import fs from 'node:fs';

const file = "hello.txt";


// Ecrire un fichier
fs.appendFileSync(file, "\nHello Bob");
// fs.prependFileSync(file, "\nHello Bob\n");

// Lire un fichier
const content = fs.readFileSync(file, "utf8");
console.log( content );



function prependFileSync(file, data)
{
    // ----
}