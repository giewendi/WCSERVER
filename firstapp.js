//Activity Name: firstapp.js
//Author Name: Pinlac, Giewen D.
//Section and Code: WD-202 / 2083

const { response } = require("express");
var express = require("Express");

var app = express();

app.get("/", function(request, response){
    response.send("Hello World!");
});

app.listen(3000, function(){
    console.log("Server running at http://localhost:3000");
});