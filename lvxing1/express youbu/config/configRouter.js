var login = require("../router/login.js")
var rim = require("../router/rim.js")
var zhuce = require("../router/zhuce.js")

module.exports = function(app){
	app.get("/login", login)
	app.get("/rim", rim)
	app.get("/zhuce", zhuce)
}