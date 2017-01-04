function HelloAngular($scope){
	
}
function login($scope,$location,apiService){
	$scope.one = function (){
		var username = $scope.username;
		var password = $scope.password;
		apiService.login("http://localhost:8080/login",{username:username,password:password},"jsonp")
						.success(function(data){
							/*console.log(data)*/
							alert(data.msg);			
							if(data.code == 1){
								localStorage.name = data.nicheng;
								sessionStorage.image=data.img;
								$location.url("/user");
							}

						})
	}	
}

function zhuce($scope,$location,apiService){
	var tel = //
	$scope.two = function(){
		if($scope.n && $scope.p && $scope.r && $scope.m && $scope.ph){
			if($scope.p != $scope.r){
				alert("填写的密码不一致")
			}else if(!(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test($scope.m))){
				alert("请填写有效的邮箱")
			}else if(!(/^1[34578]\d{9}$/.test($scope.ph))){
				alert("请填写有效的电话号码")
			}else{
				//alert("ajax")
				apiService.login("http://localhost:8080/zhuce",{username:$scope.n,password:$scope.p,email:$scope.m,phone:$scope.ph},"jsonp")
				.success(function(res){
					if(res.code){
						alert("用户已存在")
					}else{
						alert("注册成功");
						$location.url("/login");
					}
				})
			}
		}else{
			alert("请完善资料")
		}
	}
}

function rim($scope,$location,apiService){
	apiService.login("http://localhost:8080/rim",{name:"dfas",age:20},"jsonp")
				.success(function(res){
					//console.log(res)
					for(var i=0;i<res.length;i++){
						for(var i in res[0]){
							$scope.data=res[0][i]
						}
						$scope.add1=function(){
							for(var i in res[0]){
								$scope.data1="";$scope.data2="";$scope.data3="";
								$scope.data=res[0][i]
							}	
						}
						$scope.add2=function(){
							for(var i in res[1]){
								$scope.data="";$scope.data2="";$scope.data3="";
								$scope.data1=res[1][i]
							}	
						}
						$scope.add3=function(){
							for(var i in res[2]){
								$scope.data="";$scope.data1="";$scope.data3="";
								$scope.data2=res[2][i]
							}	
						}
						$scope.add4=function(){
							for(var i in res[3]){
								$scope.data="";$scope.data1="";$scope.data2="";
								$scope.data3=res[3][i]
							}	
						}
					}
				})

}

function user($scope){
	if(sessionStorage.image){
		$scope.img = sessionStorage.image;
	}
}

function con($scope){
	$scope.$on("ngRepeatFinished",function(ngRepeatFinishedEvent){
		alert(9)
	})
}

 angular.module("myapp")
 		.controller("HelloAngular",HelloAngular)
 		.controller("login",login)
 		.controller("rim",rim)
 		.controller("user",user)
 		.controller("con",con)
 		.controller("zhuce",zhuce)

