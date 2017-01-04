var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

require("./config/configRouter.js")(app);

var server = app.listen(8080, function(){
	//console.log(server.address())
})
console.log(8080);
