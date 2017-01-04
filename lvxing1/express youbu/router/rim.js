var express = require("express");
var router = express.Router();
var fs = require("fs");

router.get("/rim", function(req, res, next){
	fs.readFile("./data/rim.json", function(err, data){
		res.jsonp(data.toString());
	})
})

module.exports = router;