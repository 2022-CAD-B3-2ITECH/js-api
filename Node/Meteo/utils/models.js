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