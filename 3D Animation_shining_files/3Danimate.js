var sctop=$('.z_top');
function scrolls(srtop){
	var body=$('html,body');
	srtop.on("click",function (){
		body.stop().animate({scrollTop:"0"}, 500);
	});
}
scrolls(sctop);	
//偶数left-right 奇数right-left
var z_videos=$('.z_videos');
var z_intro=$('.z_intro');
//$('.z_videos:even').addClass('on-left');
//$('.z_intro:even').addClass('on-right');
//$('.z_videos:odd').addClass('on-right');
//$('.z_intro:odd').addClass('on-left');
$z_big_H = $(".z_bigvideo").width();
$cw = $(window).width();
// $(".z_bigvideo").css("padding-left",($cw-$z_big_H)/2);
// $(".z_bigvideo").css("padding-right",($cw-$z_big_H)/2);
z_videos.on("click",function (){
		var url = $(this).find("var").html();
		$(".z_bigplay,.z_bigvideo-photo,#t_mask").hide();
		$("iframe").show();
		$("iframe").attr("src",url);
		$(".z_bigvideo").css("background","white");

	// $(".youtube_wrap").show();
	
	// var video = $("#youtube_video");

	// var top = ($(window).height()-video.height())/2;
	// video.css("marginTop",top);

	// video.find("iframe").attr("src",url);

	// $(".youtube_wrap").on("click",function (event){

	// 	$(".youtube_wrap").hide();
		
	// });
});
for (var i = 0; i < z_videos.children().length; i++) {
	if (i%2==0) {
		even=i;
		z_videos.eq(i).addClass('on-left');
		z_intro.eq(i).addClass('on-right');
		z_intro.eq(i).find("dd").css("text-align","right");
	}else{
		even=i;

		z_intro.eq(i).addClass('on-left');
		z_videos.eq(i).addClass('on-right');
		z_videos.eq(i).css("float","left");
	}
}
$(window).resize(function() {
	var video_img = $('.z_videos img'),
		video_mask = $('.z_videos span');
	video_mask.height(video_img.height());
	video_mask.width(video_img.width());
})


