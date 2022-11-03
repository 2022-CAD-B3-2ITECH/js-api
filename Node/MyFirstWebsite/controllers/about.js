// Import / Require
// --

const express = require('express');
const router = express.Router();
// const router = require('express').Router();



// Definition du controller
// --

router.get("/about", (request, response) => {

    response.send("Hello About Page !!!");

})


// Export du controller
// --

module.exports = router;