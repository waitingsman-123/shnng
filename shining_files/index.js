$(function(){

	var j_ourservice=$('.j_ourservice');

	var j_ourservice_list=$('.j_ourservice_list');

	var j_ourservice_list_img=$('.j_ourservice_list_img');

	var j_ourservice_list_column=$('.j_ourservice_list_column');

	var j_ourservice_list_text=$('.j_ourservice_list_text');

	var even=0;

	var height=0;

	//使图片和和文字同高

		for (var i = 0; i < j_ourservice.children().length; i++) {

		height=j_ourservice_list.eq(i).height();

		var mh=(height-j_ourservice_list_img.eq(i).height())/2;

		/*if (j_ourservice_list.eq(i).height()>=j_ourservice_list_img.eq(i).height()) {

			// j_ourservice_list_img.eq(i).css({"top":mh});

		}

		if ($(window).width()<=640) {

				j_ourservice_list_img.eq(i).css({"top":'0'});

			}*/

		j_ourservice.children().eq(i).find('.j_ourservice_list_column').css({'background':'rgb(176,176,176)'});

		var mh=(height-j_ourservice_list_img.eq(i).height())/2;

//		j_ourservice_list_img.eq(i).css({"top":mh});

//		alert(height)

//		j_ourservice.children().eq(i).find('.j_ourservice_list_img').css({'height':height});

		}

//		var h=$('.displaya');

		

		//偶数的文本向右对齐

	for (var i = 0; i < j_ourservice.children().length; i++) {

		if (i%2!=0) {

			even=i;

		}

	}

	j_ourservice.children().eq(even).addClass('j_ourservice_list_text_align_right');

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



				//手机

//				j_ourservice_list_img.children().children().eq(0).css('display','block');

//				j_ourservice_list_img.children().children().eq(0).css('display','none');

//		$(this).children().children().eq(0).hide(350);

for (var i = 0; i < $('.displaya').children().length; i+=2) {

	$('.displaya').children().eq(i).css('opacity','0');

}

//		$('.displaya').children().eq(0).css('opacity','0');

//		var mh=(height-j_ourservice_list_img.eq(i).height())/2;

//		for (var i = 0; i < j_ourservice_list_img.length; i++) {

//			j_ourservice_list_img.eq(i).css({"marginTop":mh/2,'marginBottom':mh/2});

//		}

		j_ourservice_list_img.parent().find('.j_ourservice_list_text').css('color','#000000');

		j_ourservice_list_img.parent().find('.j_ourservice_list_column').css('background-color', '#CFDB00');



			} else {



				

//	var mh=(height-j_ourservice_list_img.eq(i).height())/4;

//

//		for (var i = 0; i < j_ourservice_list_img.length; i++) {

//			j_ourservice_list_img.eq(i).css({"marginTop":mh/2,'marginBottom':mh/2});

//		}

var timer=null;

	$(window).resize(function(){

		

		timer=setInterval(function(){

			for (var i = 0; i < j_ourservice.children().length; i++) {		

		height=j_ourservice_list.eq(i).height();

		var mh=(height-j_ourservice_list_img.eq(i).height())/2;

		if (j_ourservice_list.eq(i).height()>=j_ourservice_list_img.eq(i).height()) {

			j_ourservice_list_img.eq(i).css({"top":'0'});

		}else{

			j_ourservice_list_img.css({"top":'0'});

		}

		

		

		// j_ourservice.children().eq(i).find('.j_ourservice_list_column').css({'height':height,'background':'rgb(176,176,176)'});

		}

		},200);

  

});

	

	//改变图片颜色（换图）

//	var ds=$('.displaya>img:first-child');

	j_ourservice_list.hover(function(){

		$(this).children().children().find('.displaya').children().eq(0).css('opacity','0');


		$(this).find('.j_ourservice_list_text').css('color','#000000');

		$(this).find('.j_ourservice_list_column').css('background-color', '#CFDB00');

	},function(){

		$(this).children().children().find('.displaya').children().eq(0).css('opacity','1');

		$(this).find('.j_ourservice_list_column').css('background','rgb(176,176,176)');

		//离开整个块改变改变成灰色

			$(this).find('.j_ourservice_list_text').css('color','rgb(176,176,176)');

	});

				

			}

		}

		browserRedirect();



});

