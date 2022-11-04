// Import / Require
// --

const express = require('express');
const router = express.Router();

// Import des methodes "get API"
const {
    getIp,
    getLocation,
    getWeather
} = require('./../utils/models');

// Import du tableau WMO
const wmo = require('./../config/wmo');

const fs = require('fs');
const path = require('path');

// Definition du controller
// --

router.get("/", async (request, response) => {
    // try-catch pour prévennir des crashes de l'application en 
    // cas d'erreur indépendante de notre développement
    try {
        // Execution des methode "Get API"
        const ip = await getIp();
        const location = await getLocation(ip);
        const weather = await getWeather(location.lat, location.lon);

        // Manipulation des données météo
        // --

        // Récupération des données de l'api Meteo
        const current = weather.current_weather;
        const units = weather.hourly_units;

        // Préparation de l'affichage de l'icon et de la description
        let icon = '';
        let description = '';
        
        // Parcour le tableau WMO (World Meteorological Organization) 
        for (let item of wmo)
        {
            // Récupération de l'icon et de la description de WMO lorsque la donnée 
            // "weathercode" de l'API meteo correspond à l'itération  courrante de WMO
            if (item.code === current.weathercode)
            {
                const file = path.join(__dirname, '..', 'public/icons', item.icon);
                const file_content = fs.readFileSync( file, {encoding:'utf8', flag:'r'} );
                
                icon = file_content;
                description = item.description;
            }
        }

        // On rend la vue en passant quelques données
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
        response.render('pages/error', {
            message: e.message
        });
    }
})


// Export du controller
// --

module.exports = router;