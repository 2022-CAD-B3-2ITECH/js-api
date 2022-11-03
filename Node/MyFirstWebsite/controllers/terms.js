// Import / Require
// --

const express = require('express');
const router = express.Router();
// const router = require('express').Router();



// Definition du controller
// --

router.get("/terms", (request, response) => {

    response.send("Hello Terms page !!!");

})


// Export du controller
// --

module.exports = router;