
function pageTitle($rootScope){
	return {
		restrict : "A",
		link : function(scope,element){
			$rootScope.$on('$stateChangeStart',function(event,toState){
				//console.log(toState.data) //$stateChangeConcel $stateChangeSuccess $stateChangeError $stateNo1Found
				var title = "当前页面--";
				if(toState.data && toState.data.title){
					title+=toState.data.title;
				}
				element.text(title);
			})
		}
	}
}


function pageTab(){
	return {
		restrict : "A",
		link : function(scope, element){
			$("#nav").on("click","span",function(){
				$(this).addClass("bg").siblings().removeClass("bg");
				var index=$(this).index();
				$("#d_box>div").eq(index).show().siblings().hide();
			})

			$("#x_nav").on("click","span",function(){
				var i=$(this).index();
				$(this).addClass("no").siblings().removeClass("no");
				$("#x_box").find("ul").eq(i).show().siblings().hide();
			})
		}
	}
}

function yinDao(){
	return {
		restrict : "A",
		link : function(scope, element){
			var swiper = new Swiper('.swiper-container',{
				pagination: '.swiper-pagination' , //显示页面上的分页器
				paginationClickable:true, //可以用手指去切换
				autoplay:2000/*自动播放时间设定*/
				//loop:true
				//autoplayDisableOnInteraction:false //循环播放
				/*onTouchEnd:function(swiper){*/
					/*var index=swiper.activeIndex;
					var banner=document.getElementById("banner");
					var h2=banner.getElementsByTagName("h2");
					for(var i=0;i<h2.length;i++){
						h2[i].style.display="none";	
					}
					h2[index].style.display="block";*/

				// }
			});
		}
	}
}

function pageSwiper(){
	return {
		restrict : "A",
		link : function(scope, element){
			new Swiper('.swiper-container',{
				pagination: '.swiper-pagination' , //显示页面上的分页器
				paginationClickable:true, //可以用手指去切换
				autoplay:2000,/*自动播放时间设定*/
				loop:true,
				autoplayDisableOnInteraction:false //循环播放

			});
		}
	}
}

function pageIscroll($timeout){
	return {
		restrict : "A",
		link : function(scope, element){
			/*if(scope.$last === true){
				$timeout(function(){
					scope.$emit("ngRepeatFinished")
				})
			}*/
			setTimeout(function(){
				var home1 = new IScroll("#home",{
					click:true
				});
			},50)
		}
	}
}

function srcJs($rootScope){
	return {
		restrict : "A",
		link : function(scope,element){
			$rootScope.$on('$stateChangeStart',function(event,toState){
				scope.srcJs=toState.data.srcJs;
			})
		}
	}
}

function pageAjax(){
	return {
		link:function(scope,element){
			$("#span1").on("click",function(){
				$.ajax({
					url:"http://localhost:8080/rim?callback=?",
					type:"get",
					dataType:"jsonp",
					success:function(res){
						console.log(typeof res);
					}
				})
			})
		}
	}
}

angular.module("myapp")
     .directive("pageTitle",pageTitle)
     .directive("pageTab",pageTab)
     .directive("yinDao",yinDao)
     .directive("pageSwiper",pageSwiper)
	.directive("pageIscroll",pageIscroll)
	.directive("srcJs",srcJs)
	.directive("pageAjax",pageAjax)


