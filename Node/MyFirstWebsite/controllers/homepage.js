// Import / Require
// --

const express = require('express');
const router = express.Router();
// const router = require('express').Router();



// Definition du controller
// --

router.get("/", (request, response) => {

    let fruits_controller = ["Pommes","Poires","Bananes","Kiwis","Fraises"];

    for (let index = 0; index < fruits_controller.length; index++) 
    {
        fruits_controller[ index ] = fruits_controller[index].toUpperCase()
    }

    // Modifie la réponse avec un message
    // response.send("Hello There !!!");

    // Modifie la réponse avec une vue
    response.render('homepage', {
        fruits_view: fruits_controller
    })

})


// Export du controller
// --

module.exports = router;