$(function (){
	var imgs=$(".minp");
	
	var arr=[];
	$("#lightning").on("click",function (){
		$(this).hide();
	});
	var z_datas=$(".z_datas li");
	var water_big_txt = document.getElementById('water_big_txt');
	function bigimgcb(img){
		var windowWidth=$(window).width();
		var windowHeight=$(window).height();

		var imgW=img.width;
		var imgH=img.height;

		$("#lightning_img").css({
			width:imgW,
			height:imgH
		})

		if (imgW>(windowWidth*0.8)){
			var newimgW = windowWidth * 0.8;
			imgH = imgH/(imgW/newimgW);

			$("#lightning_img").css({
				width:newimgW,
				height:imgH
			})
		}
		if (imgH>(windowHeight*0.8)){
			var newimgH = windowHeight * 0.8;
			imgW = imgW/(imgH/newimgH);
			$("#lightning_img").css({
				height:newimgH,
				width:imgW
			})
		}
		$("#frame").css({
			left:(windowWidth-$("#lightning_img").width())/2,
			top:(windowHeight-$("#lightning_img").height())/2
		});
	}

	var bodyWidth=$(window).width();
	if (bodyWidth<=480){
		var h1=0,h2=0;
	}else{
		var h1=0,h2=0,h3=0,h4=0;
	}

	for (var i=0; i<imgs.length; i++){

		arr.push(imgs.eq(i).attr("src"));
	}
	var loadIndex = 0;//加载图片数量
	for (var i=0; i<arr.length; i++){
		// alert(arr[i]);
		var img=new Image();
		img.src=arr[i];
		img.index=i;
		if (img.complete){

			$("#loading").hide();
			cb(img.src,img.index);
			// alert(img.height);
		}else{
			img.onload=function (){
				$("#loading").hide();
				cb(this.src,this.index);

				
			}
		}
	}
	
	$(window).resize(function (){

		var bodyWidth=$(window).width();
		var contentWidth=$(".z_waterfall ul").width();
		var lis = $(".z_waterfall ul li");//瀑布流中的小块

		if (bodyWidth<=480){
			h1=0,h2=0;
			var arrH=[h1,h2];
			var w="50%";

		}else{
			h1=0,h2=0,h3=0,h4=0;
			var arrH=[h1,h2,h3,h4];
			var w="25%";
		}

		for (var i=0; i<lis.length; i++){

			/*
			重排
			*/
			if (bodyWidth<480){

				var min = Math.min(arrH[0],arrH[1]);
				switch (min){
					case arrH[0]:
						var num = 0;
						break;
					case arrH[1]:
						var num = 1;
						break;
				}
			}else{
				var min=Math.min(arrH[0],arrH[1],arrH[2],arrH[3]);
				switch (min){
					case arrH[0]:
						var num = 0;
						break;
					case arrH[1]:
						var num = 1;
						break;
					case arrH[2]:
						var num = 2;
						break;
					case arrH[3]:
						var num = 3;
						break;
				}
			}
			var l = num*(contentWidth/arrH.length); 
			var h = arrH[num];
			lis.eq(i).css({
				left:l,
				top:h,
				width:w
			});
			arrH[num]+=lis.eq(i).outerHeight();
		}
		if (bodyWidth<=480){
			h1 = arrH[0];
			h2 = arrH[1];
			var max=Math.max(arrH[0],arrH[1]);
			$(".z_waterfall ul").height(max);
		}else{
			h1 = arrH[0];
			h2 = arrH[1];
			h3 = arrH[2];
			h4 = arrH[3];
			var max=Math.max(arrH[0],arrH[1],arrH[2],arrH[3]);
			$(".z_waterfall ul").height(max);
		}
	});
	function cb(src,index){
		var src = src;
		var contentWidth=$(".z_waterfall ul").width();

		if (bodyWidth<=480){
			//手机
			var arrH=[h1,h2];
			var w="50%";

			function appendImg(hn,num,src){
				var l=num*(contentWidth/arrH.length);
				var li=$("<li class='list'><a class='min_img' href='###'><img src='"+src+"'/><div class='list_mask'><div class='mask_green_wrap'><div class='mask_green'><span><img src='../img/fangda.png'></span></div></div></div></a></li>");
				// var li=$("<li class='list'><a class='min_img' href='###'><img src='"+newImg.attr("src")+"'/><div class='list_mask'><div class='mask_green_wrap'><div class='mask_green'><div class='magnifier'></div><br><span>我是文字</span></div></div></div></a></li>");
				var	newli=li.clone();
					newli.css({
						left:l,
						top:hn,
						width:w
					});
				newli.attr("index",index);
				newli.appendTo(".z_waterfall ul");
				newli.on("click",function (){
				 	$("#lightning").show();
				 	
				 	// alert(z_datas.eq(index).html());
				 	var src = $(z_datas).eq($(this).attr("index")).find(".big").attr("src");
				 	var src_txt = $(z_datas).eq($(this).attr("index")).find(".big_txt").html();
				 	$("#lightning_img").get(0).src=src;
				 	water_big_txt.innerHTML=src_txt;
				 	var img=new Image();
					img.src=src;
					if (img.complete){

						
						bigimgcb(img);
					}else{
						img.onload=function (){
							bigimgcb(this);
						}
					}
				 });
//					$("#show ul").html(newli)

				return h=parseInt(newli.outerHeight());
					
			}

			var min=Math.min(h1,h2);

			switch(min){
				case h1:
					var h=appendImg(h1,0,src);
					h1+=h;
					break;
				case h2:
					var h=appendImg(h2,1,src);
					h2+=h;
					break;
			}
			var max=Math.max(h1,h2);
			$(".z_waterfall ul").height(max);
		}else{
			//桌面
			// alert(h1+","+h2+","+h3+","+h4);
			var arrH=[h1,h2,h3,h4];

			function appendImg(hn,num,src){
				var l=num*(contentWidth/arrH.length);
//				console.log(newImg.src)
				var newli=$("<li class='list'><a class='min_img' href='###'><img src='"+src+"'/><div class='list_mask'><div class='mask_green_wrap'><div class='mask_green'><span><img src='/templets/default/shining/img/fangda.png'></span></div></div></div></a></li>");
				// newli=li.clone();
//				console.log(newImg)
					newli.css({
						left:l,
						top:hn,
						width:w
					});
					newli.attr("index",index);
					newli.appendTo(".z_waterfall ul");
					newli.hover(function (){
						if (window.navigator.userAgent.indexOf("MSIE 8")!=-1){
							$(this).find(".list_mask").stop().animate({
								"opacity":"0.8"
							},700);
						}else{
							$(this).find(".list_mask").stop().animate({
								"opacity":"1"
							},700);
						}
						
						
					},function (){
						$(this).find(".list_mask").stop().animate({
							"opacity":"0"
						},700);
					});
					newli.on("click",function (){
					 	$("#lightning").show();
					 	
					 	// alert(z_datas.eq(index).html());
					 	var src = $(z_datas).eq($(this).attr("index")).find(".big").attr("src");
					 	var src_txt = $(z_datas).eq($(this).attr("index")).find(".big_txt").html();
					 	$("#lightning_img").get(0).src=src;
					 	water_big_txt.innerHTML=src_txt;
					 	var img=new Image();
						img.src=src;
						if (img.complete){

							
							bigimgcb(img);
						}else{
							img.onload=function (){
								bigimgcb(this);
							}
						}
					 });
//					$("#show ul").html(newli)

					return h=parseInt(newli.outerHeight());
					
			}

				var w="25%";
				var min=Math.min(h1,h2,h3,h4);
				var max=Math.max(h1,h2,h3,h4);

				$(".z_waterfall ul").height(max);
				switch(min){
					case h1:
						var h=appendImg(h1,0,src);
						h1+=h;
						break;
					case h2:
						var h=appendImg(h2,1,src);
						h2+=h;
						break;
					case h3:
						var h=appendImg(h3,2,src);
						h3+=h;
						break;
					case h4:
						var h=appendImg(h4,3,src);
						h4+=h;
						break;
				}
			var max=Math.max(h1,h2,h3,h4);
			$(".z_waterfall ul").height(max);
		}
	}




});
	