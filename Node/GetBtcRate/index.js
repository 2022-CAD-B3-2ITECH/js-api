// Utilisation
// --
// -> node index.js currency=USD    => retourne le prix du BTC en USD
// -> node index.js currency=EUR    => retourne le prix du BTC en EUR
// -> node index.js currency=GBP    => retourne le prix du BTC en GBP
// -> node index.js currency=YEN    => retourne un message d'erreur
// -> node index.js                 => retourne le prix du BTC en USD


// API Source
// --
// url: https://api.coindesk.com/v1/bpi/currentprice.json


// Modules Node
// --
// http ou https
// Axios

// ----------------------------------------------------------------------------
 
const https = require('https');

// npm i axios
const axios = require('axios');

// Recupération des arguments
const args = require('./utils/args');

// Definition de la devise par defaut
const defaultCurrency = "USD";

// Definition de la devise
// 1 - Test si "args.currency" n'est pas "undefined". Si "undefined", on affecte la "defaultCurrency"
// 2 - Test la longueur de la chaine, si "currency" est vide on affecte la "defaultCurrency"
let currency = args.currency ?? defaultCurrency;
    currency = currency.length ? currency : defaultCurrency;



// Definition des options de la requete
const request_options = {
    host: "api.coindesk.com",
    path: "/v1/bpi/currentprice.json",
    method: "GET",
    // port: 443
}

// const request_options = {
//     host: "pokeapi.co",
//     path: "/api/v2/pokemon?limit=100000&offset=0",
//     method: "GET",
//     // port: 443
// }



// Execution de la requete
// const request = https.request(request_options, response => {

//     let content = '';

//     response.on('data', chunk => {
//         // console.log(chunk);
//         content += chunk;
//     });

//     response.on('end', () => {

//         // Convertion des données en "json"
//         const json = JSON.parse(content);

//         // Récupération de la liste des prix du BTC (Bitcoin Price Index)
//         const bpi = json.bpi;

//         // Recupération du prix du BTC dans la devise souhaité
//         const price = bpi[currency];

//         price 
//             ? console.log( `1 BTC vaux ${price.rate} ${currency}` )
//             : console.log("La devise est inconnue")
//         ;
//     });

// });


// Ferme la connexion de la requete https.request()
// request.end();


axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => {
        // console.log( response.data );

        const json = response.data;
        
        // Récupération de la liste des prix du BTC (Bitcoin Price Index)
        const bpi = json.bpi;

        // Recupération du prix du BTC dans la devise souhaité
        const price = bpi[currency];

        price 
            ? console.log( `1 BTC vaux ${price.rate} ${currency}` )
            : console.log("La devise est inconnue")
        ;
    });

