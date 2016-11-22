var sctop=$('.z_top');
var body=$('html,body');
sctop.on("click",function (){
	body.stop().animate({scrollTop:"0"}, 500);
});