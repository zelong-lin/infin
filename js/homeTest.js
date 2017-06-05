window.onload = function(){
	var upText = document.getElementsByClassName("upText")[0];
	var textDiv = upText.getElementsByTagName("div");
	var mySwiper = new Swiper ('.swiper-container', {
		//加上这句之后分页按钮点击的时候就可以切换
		paginationClickable: true,	
	//			effect:"flip",	//翻页效果
	//			effect:"cube",	//立体盒子效果
		autoplay:2000,	//自动播放
		speed:500,	//每次播放的花费的时间
//		spacebetween:3000,
		autoplayDisableOnInteraction:false,	//用户操作过后可继续执行autoplay
		loop:true,//无缝滚动的效果
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
	    // 产生三张图片效果
	    // slidesPerView: 3,
	    // 如果需要前进后退按钮
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
		onSlideChangeStart:function(swiper){ 
			var num = swiper.activeIndex - 1;
			if(num == 6){
				num = 0;
			}
			for(i=0;i<textDiv.length;i++){
				textDiv[i].className= "";
			}
			textDiv[num].className = "active";
		}
	}) 

//	覆盖效果
	function hover(){
		$("#content").on("mouseenter",">a",function(){
			$(this).find(".behover").stop().fadeIn();
			$(this).find("p").css("color","black");
		})
		$("#content").on("mouseleave",">a",function(){
			$(this).find(".behover").stop().fadeOut();
			$(this).find("p").css("color","#ADADAD");
		})
	}
	
//	跳转
	$("#run").children("span").click(function(){
		var $index = $(this).index();
		run($index);
	})
	
//	接受view传回来的值
	function receiveData(){
		var r = location.hash;
		if(r == "#home"){
			r = 0;
		}else if(r == "#work"){
			r = 1;
		}else if(r == "#contact"){
			r = 2;
		}
		run(r);
	}
	
	function run(x){
		switch (x){
			case 0:
				$(document).scrollTop(0);
				break;
			case 1:
				$(document).scrollTop($("#text").position().top);
				break;
			case 2:
				$(document).scrollTop($("#copy").offset().top);
				break;
		}
	}
	
	$(window).resize(function(){
		$dw = $(document).outerWidth(true);
		if($dw < 640){
			$("#main").css("width","640px");
			$("#content .outer").css("font-size","12px");
		}else if($dw >640){
			$("#main").css("width","100%");
			$("#content .outer").css("font-size","16px");
		}
	})
	
	receiveData();
	hover();
}