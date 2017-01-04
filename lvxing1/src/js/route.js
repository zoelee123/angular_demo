;(function($){
	//alert(0)
	$("#deta h6").on("click","span",function(){
		$(this).addClass("no").siblings().removeClass("no");
	})
	$("#deta h4").on("click","span",function(){
		$(this).addClass("bg").siblings().removeClass("bg");
	})

})(Zepto);
