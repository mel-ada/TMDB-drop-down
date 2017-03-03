//using node.js's require function to
//import the express module
const express = require('express')

//the top-level express object has a Router() method
//that creates a new router object. You can add middleware
//and HTTP method routes to this router object
const router = express.Router()

router.post('/titleSearch', function(request, response){
//debouncing - trigger request after certain time (100 miliseconds) of pause in typing
  console.log("request", request.body.movieSearch)
  response.json("hi")
})

module.exports = router
