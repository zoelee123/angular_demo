var express = require("express");
var router = express.Router();
var fs = require("fs");

router.get("/login", function(req, res, next){
	

	fs.readFile("./data/login.json", function(err, data){
		var username=req.query.username,
			password=req.query.password;

		var data1=JSON.parse(data.toString());
		var json={};
		for(var i=0;i<data1.length;i++){
			if(username == data1[i].username){
				if(password == data1[i].password){
					json.code=1;
					json.msg="欢迎"+data1[i].username+"登陆成功！";
					json.nicheng=data1[i].nicheng;
					json.img=data1[i].img;
				}else{
					json.code=0;
					json.msg="密码错误";
				}	
			}else{
				if(!json.msg){
					json.code=0;
					json.msg="账号错误";
				}
			}
		}
		var jsons = JSON.stringify(json);
		//console.log(jsons)
		res.jsonp(jsons);
	})
})

module.exports = router;