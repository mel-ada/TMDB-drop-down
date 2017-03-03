//include the express package
//require is a nodeJS function, which loads modules
//and givess access to their exports
const express = require('express')

//Node.JS package that helps manage paths
const path = require("path")

//calls the express function "express()" and puts new Express
//application inside the app variable. "express()" is a class and app is it's
//newly created object
const app = express()

//Routes HTTP GET requests to the specified path with the specified
//callback functions.
app.get('/', function(request, response){

  //using the express sendFile method to transfer at the given path
  //the file into a HTTP request
  response.sendFile(path.join(__dirname+'/views/index.html'))
})

//Starts a UNIX socket and listens for connections on the given path,
//then executes the callback function
//This method is identical to Node’s http.Server.listen().
app.listen(4000, function(){
  console.log('Example app listening on port 4000!')
})
