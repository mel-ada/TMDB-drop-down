//include the express package
//require is a nodeJS function, which loads modules
//and givess access to their exports
const express = require('express')

//Node.JS package that helps manage paths
const path = require("path")

//using node.js's require function to import the body-parser
//npm module
const bodyParser = require("body-parser")

//using node.js's require function to import the index routing file
const index = require('./routes/index')

//calls the express function "express()" and puts new Express
//application inside the app variable. "express()" is a class and app is it's
//newly created object
const app = express()

//mounts the middleware function (body-parser's urlendcoded method)
//since the path defaults to '/', middleware mounted without a path will be
//executed for every request to the app
app.use(bodyParser.urlencoded({
    extended: false
}))

//Routes HTTP GET requests to the uri with the specified
//callback function.
app.get('/', function(request, response){

  //using the express sendFile method to transfer
  //the file at the given path into a HTTP request
  response.sendFile(path.join(__dirname+'/views/index.html'))
})

//mounts the "middleware" index to the '/' path
app.use('/', index)

//Starts a UNIX socket and listens for connections on the given path,
//then executes the callback function
//This method is identical to Node’s http.Server.listen().
app.listen(4000, function(){
  console.log('Example app listening on port 4000!')
})
