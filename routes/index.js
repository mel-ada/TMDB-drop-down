//using node.js's require function to
//import the express module
const express = require('express')

//the top-level express object has a Router() method
//that creates a new router object. You can add middleware
//and HTTP method routes to this router object
const router = express.Router()

router.post('/titleSearch', function(request, response){
  rp(movieSite)
  .then(function(results) {
    console.log('results', results);
    response.body.movieSearch
  })
})

module.exports = router
