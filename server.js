var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// app.get("/api/friends", function(req, res){
//     res.send("Hello World")
// })

// app.get("/home", function(req, res){
//     // need to insert code here for the html page
//     res.sendFile(path.join(__dirname, "app/public/home.html"));
// })

// app.get("/survey", function(req, res){
//     res.sendFile(path.join(__dirname, "app/public/survey.html"));
// })







app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});