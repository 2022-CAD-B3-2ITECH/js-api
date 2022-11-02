"use strict";

const api_base = "https://pokeapi.co/api/v2/";
const api_endpoint = "?limit=100000&offset=0";


/**
 * Make an HTTP Request with GET method
 * 
 * @param {string} url of the request
 * @returns a json response
 */
async function httpGet(url)
{
    const response_fetch = await fetch(url);
    const response_json = await response_fetch.json();

    return response_json;
}



const url = `${api_base}${api_endpoint}`;

console.log( httpGet(url) );
