function config($stateProvider,$urlRouterProvider){
	/*console.log($stateProvider)
	console.log($urlRouterProvider)*/
	$urlRouterProvider.otherwise("yindao");

	$stateProvider
			.state("index",{
				url:"/index",
				templateUrl:"view/index.html"
			})
			.state("guojia",{
				url:"/guojia",
				templateUrl:"view/guojia.html",
				data : {
					title : "guojia页面"
				}
			})
			.state("country",{
				url:"/country",
				templateUrl:"view/country.html",
				data : {
					title : "country页面"
				}
			})
			.state("route",{
				url:"/route",
				templateUrl:"view/route.html",
				data : {
					title : "route页面",
					srcJs : "js/route.js"
				}
			})
			.state("xingcheng",{
				url:"/xingcheng",
				templateUrl:"view/xingcheng.html",
				data : {
					title : "xingcheng页面"
				}
				
			})
			.state("rim",{
				url:"/rim",
				templateUrl:"view/rim.html",
				data : {
					title : "rim页面"
				},
				controller:"rim"
			})
			.state("chepiao",{
				url:"/chepiao",
				templateUrl:"view/chepiao.html",
				data : {
					title : "chepiao页面"
				}
			})
			.state("checi",{
				url:"/checi",
				templateUrl:"view/checi.html",
				data : {
					title : "checi页面"
				}
			})
			.state("checi_x",{
				url:"/checi_x",
				templateUrl:"view/checi_x.html",
				data : {
					title : "checi_x页面"
				}
			})
			.state("put_in",{
				url:"/put_in",
				templateUrl:"view/put_in.html",
				data : {
					title : "put_in页面"
				}
			})
			.state("success",{
				url:"/success",
				templateUrl:"view/success.html",
				data : {
					title : "success页面"
				}
			})
			.state("pay",{
				url:"/pay",
				templateUrl:"view/pay.html",
				data : {
					title : "pay页面"
				}
			})
			.state("pay_way",{
				url:"/pay_way",
				templateUrl:"view/pay_way.html",
				data : {
					title : "pay_way页面"
				}
			})
			.state("user",{
				url:"/user",
				templateUrl:"view/user.html",
				data : {
					title : "user页面"
				},
				controller:"user"
			})
			.state("set",{
				url:"/set",
				templateUrl:"view/set.html",
				data : {
					title : "set页面"
				}
			})
			.state("we",{
				url:"/we",
				templateUrl:"view/we.html",
				data : {
					title : "we页面"
				}
			})
			.state("denglu",{
				url:"/denglu",
				templateUrl:"view/denglu.html",
				data : {
					title : "denglu页面"
				}
			})
			.state("zhuce",{
				url:"/zhuce",
				templateUrl:"view/zhuce.html",
				data : {
					title : "zhuce页面"
				},
				controller : "zhuce"
			})
			.state("login",{
				url : "/login",
				templateUrl: "view/login.html",
				data : {
					title : "login页面"
				},
				controller:"login"
			})
			.state("weixin",{
				url:"/weixin",
				templateUrl:"view/weixin.html",
				data : {
					title : "weixin页面"
				}
			})
			.state("tell",{
				url:"/tell",
				templateUrl:"view/tell.html",
				data : {
					title : "tell页面"
				}
			})
			.state("personal",{
				url:"/personal",
				templateUrl:"view/personal.html",
				data : {
					title : "personal页面"
				}
			})
			.state("news",{
				url:"/news",
				templateUrl:"view/news.html",
				data : {
					title : "news页面"
				}
			})
			.state("indent",{
				url:"/indent",
				templateUrl:"view/indent.html",
				data : {
					title : "indent页面"
				}
			})
			.state("collect",{
				url:"/collect",
				templateUrl:"view/collect.html",
				data : {
					title : "collect页面"
				}
			})
			.state("idea",{
				url:"/idea",
				templateUrl:"view/idea.html",
				data : {
					title : "idea页面"
				}
			})
			.state("yindao",{
				url:"/yindao",
				templateUrl:"view/yindao.html",
				data : {
					title : "yindao页面"
				}
				
			})
}
angular.module("myapp")
		.config(config)