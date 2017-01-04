var gulp=require("gulp");
var fs=require("fs");
var connect=require("gulp-connect");		
var respond=require("gulp-respond");


var uglify=require("gulp-uglify");
var concat=require("gulp-concat");

var ngAnnotate = require("gulp-ng-annotate");	//整理
var ngmin = require("gulp-ngmin");			//压缩angular

var clean = require("gulp-clean");

var minifyCss = require("gulp-minify-css");
var minifyHtml = require("gulp-minify-html");
var rename = require("gulp-rename");

var rev = require("gulp-rev");	//加密
var collector = require("gulp-rev-collector");	//替换

gulp.task("clean" , function () {
	return gulp.src(["./src/js/build/","./src/css/build/","./src/build/"])
				.pipe(clean())
})

gulp.task("miniJs",["clean"],function(){
	//console.log(1)
	return gulp.src(["lib/zepto/zepto.min.js","src/js/iscroll5.js","lib/swiper/dist/js/swiper.min.js","lib/angular/angular.min.js","lib/angular-ui-router/release/angular-ui-router.min.js","src/js/app.js","src/js/config.js","src/js/controller.js","src/js/directive.js","src/js/api.service.js"])
		.pipe(ngAnnotate())
		.pipe(ngmin())
		.pipe(uglify())
		.pipe(concat("all.min.js"))
		/*.pipe(rev())*/
		.pipe(gulp.dest("src/js/build/"))
		/*.pipe(rev.manifest("miniJs.json"))
		.pipe(gulp.dest("./src/"))*/
})

/*gulp.task("miniHtml",["miniJs"],function(){
	return gulp.src("./src/index.html")
		.pipe(minifyHtml())
		.pipe(rename(function(path){
			//console.log(path);
			path.basename = "build";
		}))
		.pipe(gulp.dest("./src/"))
})*/

/*gulp.task("rev",["miniJs"],function(){
	return gulp.src(["./src/miniJs.json"])
		.pipe(collector())
		.pipe(gulp.dest("./src/"))
})
*/

gulp.task("watch",function(){
	return gulp.watch(["./src/js/*.js","./src/css/*.css","./src/index.html"],["miniJs"])
})

gulp.task("connect",function(){
	var params={};
	//启动本地server
	connect.server({
		root:["./src","./lib"],
		port:8888,
		livereload:true,
		//本地server中间件，完成本地动态编译
		middleware:function(){
			return [function(req,res,next){
				//console.log("开始操作");
				next();
			},function(req,res){
				var path=req.url.split("?").shift();
				//console.log(path)
				path=path=="/" ? "/index.html":path;
				url = "src"+ path;
				//console.log(url)
				if(!fs.existsSync(url)){
					url = "lib" + path;
				}
				gulp.src(url)
					.pipe(respond(res));
			}];
		}
	})
})
gulp.task("serve",["miniJs","connect","watch"]);
