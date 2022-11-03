const { 
    app, 
    BrowserWindow
} = require('electron');

// Utilise l'application NodeJS (fichier server.js)
const port = require('./server');

const createWindow = () => {

    // Definition des propriété de la fenetre d'application
    const win = new BrowserWindow({
        width: 900,
        height: 800,
    });

    // win.loadFile('index.html');
    win.loadURL(`http://localhost:${port}`);

}

app.whenReady().then(() => createWindow());