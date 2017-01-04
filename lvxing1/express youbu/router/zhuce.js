var express = require("express");
var router = express.Router();
var fs = require("fs");

router.get("/zhuce", function(req, res, next){
	fs.readFile("./data/login.json", function(err, data){
		var user=req.query;
		var m=0;
		console.log(user)
		var data1=JSON.parse(data.toString());
		var json={code:0};
		for (var i = 0; i < data1.length; i++) {
			if(data1[i].username == user.username){
				json.code=1;
			}
		};
		if(!json.code){
			data1.push({"username":user.username,"password":user.password,"id":"5","img":"img/d5.png","email":user.email,"phone":user.phone})
			//console.log(JSON.stringify(data1));
			fs.writeFile("./data/login.json",JSON.stringify(data1))

		}

		var jsons = JSON.stringify(json);
		res.jsonp(jsons);
	})
})

module.exports = router;