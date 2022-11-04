# Meteo App

## Creation du projet

```shell
mkdir MeteoApp
cd MeteoApp
```

## Initialisation du projet pour Node

### Installation des dépendences

```shell
npm init
npm i express
npm i ejs
npm i axios
npm i --save-dev nodemon
npm i --save-dev electron
npm i --save-dev electron-builder
```

### Mise en place du .gitignore

```txt
/node_modules/
/dist/
package-lock.json
```

### Préparation des commandes NPM

Dans le fichier `package.json`, à la section `scripts`, ajouter:

```json
"scripts": {
    "serve": "nodemon server.js",
    "start": "electron .",
    "build": "electron-builder build --win",
}
```

### Démarrage de nodemon

```shell
npm run serve
```

## Création de la structure

### Création des fichiers `server.js` et `main.js`

```shell
touch server.js 
touch main.js
```

### Création des répertoires de bases

```shell
mkdir config
mkdir controllers
mkdir public
mkdir public/images
mkdir public/scripts
mkdir public/styles
mkdir utils
mkdir views
mkdir views/layout
mkdir views/pages
```

## Mise en place du server

### Ajout des données de config

Créer le fichier `config/settings.js`

```shell
touch config/settings.js
```

puis le modifier:

```js
"use strict";

exports.ip_api       = "http://api.my-ip.io/ip";
exports.location_api = "http://ip-api.com/json/%ip%";
exports.weather_api  = "https://api.open-meteo.com/v1/forecast?latitude=%latitude%&longitude=%longitude%&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,weathercode&current_weather=true";
```

### Ajout du module de gestion des ports

Créer le fichier `utils/ports.js`

```shell
touch utils/ports.js
```

puis le modifier:

```js
const net = require('net');

module.exports = function()
{
    const server = net.createServer();
    server.listen(0);
    const port = server.address().port;
    server.close();
    return port;
}
```

### Création du server

Modifier le fichier `server.js`

```js
"use strict";

// Imports / Requires
// --

const express = require('express');
const ejs = require('ejs');
const path = require('path');
const guessPort = require('./utils/ports');

const app = express();
const port = guessPort();

// App Setup 
// --

app.set('views', path.join(__dirname, "views"));
app.set('view engine', "html");
app.engine('html', ejs.__express);
app.use( express.static( path.join( __dirname, "public" ) ) )

// Routing
// --

app.use(require('./controllers/now'));
app.use(require('./controllers/24h'));

app.use((request, response) => {
    response.status(404);
    response.send('Ooops page not found !')
});

// Start server App
// --

app.listen(port, () => console.log(`App is listening on port : http://127.0.0.1:${port}`));

module.exports = port;
```

### Création des controleurs

```shell
touch controllers/now.js
touch controllers/24h.js
```

#### Modifier le controleur `now.js`

```js
const express = require('express');
const router = express.Router();

router.get("/", (request, response) => { // <---- Definition de la route "/"

    response.render('pages/now', {}) // <---- Appel de la vue "views/pages/now.html"

})

module.exports = router;
```

#### Modifier le controleur `24h.js`

```js
const express = require('express');
const router = express.Router();

router.get("/24h", (request, response) => { // <---- Definition de la route "/24h"

    response.render('pages/24h', {}) // <---- Appel de la vue "views/pages/24h.html"

})

module.exports = router;
```

### Création des vues

```shell
touch views/pages/now.html
touch views/pages/24h.html
touch views/pages/error.html
```

#### Modifier la vue `now.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    
    <h1>Meteo App - Now</h1>

</body>
</html>
```

#### Modifier la vue `24h.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    
    <h1>Meteo App - 24h</h1>

</body>
</html>
```

#### Modifier la vue `error.html`

### Test des pages

aller à l'adresse inscrite dans le terminal `App is listening on port : http://127.0.0.1:8080`

- `http://127.0.0.1:8080/`
- `http://127.0.0.1:8080/24h`

/!\ Pensez à modifier le numéro de port par celui généré par la fonction `guessPort()`

### Création des requêtes API

#### Création du fichier str utils

Créer le fichier `utils/string.js`

```shell
touch utils/string.js
```

Modifier le fichier

```js
"use strict";

exports.strReplace = function (str, data={}) 
{
    for (const key in data) 
    {
        str = str.replace(`%${key}%`, data[key]);
    }

    return str;
}
```

#### Création du fichier des models

Créer le fichier de stockage des requêtes `utils/models.js`

```shell
touch utils/models.js
```

Modifier le fichier

```js
"use strict";

const axios = require('axios');
const config = require('./../config/settings');
const {strReplace} = require('./string');

exports.getIp = async function()
{
    const url = config.ip_api;
    const response = await axios.get(url);
    return await response.data;
}

exports.getLocation = async function (ip)
{
    const url = strReplace(config.location_api, {
        ip: ip
    });
    const response = await axios.get(url);
    return await response.data;
}

exports.getWeather = async function (latitude, longitude)
{
    const url = strReplace(config.weather_api, {
        latitude: latitude,
        longitude: longitude
    });
    const response = await axios.get(url);
    return await response.data;
}
```

#### Ajout de la ressource WMO

WMO (World Meteorological Organization) standardise les données météo.

Creation du fichier `config/wmo.js`

```shell
touch config/wmo.js
```

Ajouter les données

```js
"use strict";

module.exports = [
    {
        code: 0, 
        description: "Clear sky",
        icon: "sun-96.svg"
    },
    {
        code: 1, 
        description: "Mainly clear",
        icon: "sun-96.svg"
    },
    {
        code: 2, 
        description: "partly cloudy",
        icon: "sun-96.svg"
    },
    {
        code: 3, 
        description: "overcast",
        icon: "sun-96.svg"
    },
    {
        code: 45, 
        description: "Fog",
        icon: ""
    },
    {
        code: 48, 
        description: "depositing rime fog",
        icon: ""
    },
    {
        code: 51, 
        description: "Drizzle: Light",
        icon: ""
    },
    {
        code: 53, 
        description: "Drizzle: moderate",
        icon: ""
    },
    {
        code: 55, 
        description: "Drizzle: dense intensity",
        icon: ""
    },
    {
        code: 56, 
        description: "Freezing Drizzle: Light intensity",
        icon: ""
    },
    {
        code: 57, 
        description: "Freezing Drizzle: Dense intensity",
        icon: ""
    },
    {
        code: 61, 
        description: "Rain: Slight intensity",
        icon: ""
    },
    {
        code: 63, 
        description: "Rain: moderate intensity",
        icon: ""
    },
    {
        code: 65, 
        description: "Rain: heavy intensity",
        icon: ""
    },
    {
        code: 66, 
        description: "Freezing Rain: Light intensity",
        icon: ""
    },
    {
        code: 67, 
        description: "Freezing Rain: heavy intensity",
        icon: ""
    },
    {
        code: 71, 
        description: "Snow fall: Slight intensity",
        icon: ""
    },
    {
        code: 73, 
        description: "Snow fall: moderate intensity",
        icon: ""
    },
    {
        code: 75, 
        description: "Snow fall: heavy intensity",
        icon: ""
    },
    {
        code: 77, 
        description: "Snow grains",
        icon: ""
    },
    {
        code: 80, 
        description: "Rain showers: Slight",
        icon: ""
    },
    {
        code: 81, 
        description: "Rain showers: moderate",
        icon: ""
    },
    {
        code: 82, 
        description: "Rain showers: violent",
        icon: ""
    },
    {
        code: 85, 
        description: "Snow showers slight",
        icon: ""
    },
    {
        code: 86, 
        description: "Snow showers heavy",
        icon: ""
    },
    {
        code: 95, 
        description: "Thunderstorm: Slight or moderate",
        icon: ""
    },
    {
        code: 96, 
        description: "Thunderstorm with slight",
        icon: ""
    },
    {
        code: 99, 
        description: "Heavy hail",
        icon: ""
    }
];
```

## Découpage du HTML

### Création des fichiers du layout

Céation des fichiers `views/layout/header.html` et  `views/layout/footer.html`

```shell
touch views/layout/header.html
touch views/layout/footer.html
```

### Modifier le fichier `header.html`

```html
<!-- header.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DocumentTitle</title>

    <link rel="stylesheet" href="styles/main.css">
</head>
<body>
    
    <header class="main-header">
        <div class="container">
            <nav>
                <a href="/">Now</a>
                <a href="/24h">Today (24h)</a>
            </nav>
        </div>
    </header><!-- End .main-header -->

    <div class="main-content">
        <div class="container">
            <div class="page-content">
```

### Modifier le fichier `footer.html`

```html
<!-- footer.html -->  
            </div><!-- End .page-content -->
        </div><!-- End .container -->
    </div><!-- End .main-content -->

    <footer class="main-footer">
    <div class="container">
        <div class="footer__copyright">
            &copy; 2022 My Weather App
        </div>
    </div>
    </footer><!-- End .main-footer -->


    <div class="bg-image"></div>

</body>
</html>
```

## Affiche la meteo du moment

### Modifier le fichier `controllers/now.js`

```js
const {
    getIp,
    getLocation,
    getWeather
} = require('./../utils/models');
const wmo = require('./../config/wmo');
const fs = require('fs');
const path = require('path');


router.get("/", async (request, response) => { // <---- Ajout de "async" pour permettre l'appel des methodes asynchrone
    try {
        // Execution des methode "Get API"
        const ip = await getIp();
        const location = await getLocation(ip);
        const weather = await getWeather(location.lat, location.lon);

        // Manipulation des données météo
        const current = weather.current_weather;
        const units = weather.hourly_units;
        let icon = '';
        let description = '';
        
        for (let item of wmo)
        {
            if (item.code === current.weathercode)
            {
                const file = path.join(__dirname, '..', 'public/icons', item.icon);
                const file_content = fs.readFileSync( file, {encoding:'utf8', flag:'r'} );
                
                icon = file_content;
                description = item.description;
            }
        }

        response.render('pages/now', {
            ip: ip,
        
            city: location.city,
            country: location.countryCode,
        
            temperature: current.temperature,
            temperatureUnit: units.temperature_2m,
        
            windspeed: current.windspeed,
            winddirection: current.winddirection,
            windspeedUnit: units.windspeed_10m,
        
            code: current.weathercode,
            icon: icon,
            description: description
        })
    }
    catch(e)
    {
        console.log(e);
        response.render('pages/error');
    }
})
```

### Modifier le fichier `views/pages/now.html`

```html
<%- include('../layout/header.html') -%>
    <div class="temperature">
        <span class="temperature_value"><%= temperature %></span>
        <span class="temperature_unit"><%= temperatureUnit %></span>
    </div>

    <div class="weather">
        <div><%- icon %></div>
        <div><%= description %></div>
    </div>

    <div class="wind">
        <span class="wind_direction" style="rotate: <%= winddirection %>deg" data-direction="<%= winddirection %>">⭣</span>
        <span class="wind_speed"><%= windspeed %></span>
        <span class="wind_unit"><%= windspeedUnit %></span>
    </div>

    <div>
        <strong>User IP : </strong> <%= ip %>
    </div>

    <div>
        <strong>User Location : </strong> <%= city %>, <%= country %>
    </div>
<%- include('../layout/footer.html') -%>
```

## Affiche la météo à 24h

### Modifier le fichier `controllers/24h.js`

```js
const {
    getIp, 
    getLocation, 
    getWeather
} = require('./../utils/models');

router.get("/24h", async (request, response) => {
    try {
        const ip = await getIp();
        const location = await getLocation(ip);
        const weather = await getWeather(location.lat, location.lon);
        const units = weather.hourly_units;

        const current_date = new Date();
        const current_day = current_date.getDate();
        const current_month = current_date.getMonth();
        const current_hour = current_date.getHours();

        let data = [];

        for (let index in weather.hourly.time)
        {
            const time = weather.hourly.time[index];
            const temperature = weather.hourly.temperature_2m[index];
            const wind = weather.hourly.windspeed_10m[index];
            const humidity = weather.hourly.relativehumidity_2m[index];
            const code = weather.hourly.weathercode[index];

            const date = new Date(time);
            const day = date.getDate();
            const month = date.getMonth();
            const hour = date.getHours();

            const hourTxt = hour <= 9 ? `0${hour}` : hour;

            if (
                (
                    month == current_month &&
                    day == current_day &&
                    hour >= current_hour
                ) 
                ||
                (
                    (
                        month == current_month + 1 ||
                        month == 1
                    )
                    &&
                    day == 1 &&
                    hour <= current_hour
                )
            )
            {
                data.push({
                    hour: hourTxt,
                    date: date,

                    temperature: temperature,
                    temperatureUnit: units.temperature_2m,

                    wind: wind,
                    windUnit: units.windspeed_10m,

                    humidity: humidity,
                    humidityUnit: units.relativehumidity_2m,

                    code: code,
                });
            }
        }
        response.render('pages/24h', {
            data: data
        });
    } catch (e) {
        console.log(e);
        response.render('pages/error');
    }
})
```

### Modifier le fichier `views/pages/24h.html`

```html
<%- include('../layout/header.html') -%>

<% for (let item of data) { %>
    <div class="hourly">
        <div class="hourly__hour"><%= item.hour %>h</div>
        <div class="hourly__code"><%= item.code %></div>
        <div class="hourly__temperature"><%= item.temperature %> <%= item.temperatureUnit %></div>
        <div class="hourly__wind"><%= item.wind %> <%= item.windUnit %></div>
        <div class="hourly__humidity"><%= item.humidity %> <%= item.humidityUnit %></div>
    </div>
<% } %>

<%- include('../layout/footer.html') -%>
```
