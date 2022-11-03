// Import / Require
// --

const express = require('express');
const router = express.Router();
// const router = require('express').Router();



// Definition du controller
// --

router.get("/", (request, response) => {

    // Modifie la réponse avec un message
    // response.send("Hello There !!!");

    // Modifie la réponse avec une vue
    response.render('homepage')

})


// Export du controller
// --

module.exports = router;