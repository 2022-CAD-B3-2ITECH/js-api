// Import / Require
// --

const express = require('express');
const router = express.Router();
// const router = require('express').Router();



// Definition du controller
// --

router.get("/terms", (request, response) => {

    response.render('terms', {});

})


// Export du controller
// --

module.exports = router;