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


// Export du controller
// --

module.exports = router;