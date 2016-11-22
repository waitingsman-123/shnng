$(
	function() {
       if ($(window).height()>655) {
       		$(".scrollt").css("height",655);
       }else{
       		$(".scrollt").css("height",$(window).height());
       }
		
		function browserRedirect() {

			var sUserAgent = navigator.userAgent.toLowerCase();

			var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";

			var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";

			var bIsMidp = sUserAgent.match(/midp/i) == "midp";

			var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";

			var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";

			var bIsAndroid = sUserAgent.match(/android/i) == "android";

			var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";

			var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

			if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {

				//手机列表
				

			} else {

//导航栏悬浮在顶部
//$('.j_nav').css({'position':'fixed','top':'0','left':'0','width':'100%','height':'4.2em','z-index':'999'});
//$('#content').css('padding-top','4.2em');
//屏幕滚动
var scrollt=$(".scrollt");
function scrolls(scroll){
	var body=$('html,body');
	var heightArr=[];
	var timer=null;
	$(document).mousewheel(function (e){
		scroll.each(function (i){
			heightArr.push(parseInt($(this).offset().top));
		});
		heightArr.push($("#footer").offset().top);
		var screent=$(document).scrollTop();
		clearTimeout(timer);
		timer=setTimeout(function (){
			for (var i = 0; i < heightArr.length; i++) {
				if(e.deltaY<0){
					//往下滚
					if (screent>=heightArr[i]&&screent<heightArr[i+1]) {
						body.stop().animate({scrollTop:heightArr[i+1]},500);
					}
				}else{
					//往上滚
					if (screent>heightArr[i]&&screent<=heightArr[i+1]) {
						body.stop().animate({scrollTop:heightArr[i]},500);
					}
				}
			}
		},200);	
		e.preventDefault();	
	});
}
scrolls(scrollt);
		}
		
	}
        browserRedirect();
});



