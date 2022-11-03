// Import / Require
// --

const express = require('express');
const router = express.Router();
// const router = require('express').Router();



// Definition du controller
// --

router.get("/", (request, response) => {

    response.send("Hello There !!!");

})


// Export du controller
// --

module.exports = router;