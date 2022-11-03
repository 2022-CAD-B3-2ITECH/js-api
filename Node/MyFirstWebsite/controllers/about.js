// Import / Require
// --

const express = require('express');
const router = express.Router();
// const router = require('express').Router();



// Definition du controller
// --

router.get("/about", (request, response) => {

    response.render('about', {});

})


// Export du controller
// --

module.exports = router;