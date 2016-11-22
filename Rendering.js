var run = document.getElementById('run')
var divs = run.querySelectorAll('#run>img')
var lis = document.querySelectorAll('.point>li')
var moveTimer = null
var index = 0
var count = -index


//1.轮播图==========================================//
function changeImg() {
	var t = 0
	var d = 30
	var b = run.offsetLeft
	var end = index * divs[0].offsetWidth
	var c = end - b
	clearInterval(moveTimer)
	moveTimer = setInterval(function() {
		t++
		if(t >= d) {
			clearInterval(moveTimer)
			moveTimer = null
		}
		run.style.left = Tween.Linear(t, b, c, d) + 'px'
		var leftStr = run.style.left
		leftStr = parseFloat(leftStr)
		if(leftStr <= -5750) {
			run.style.left = 0
			index = 0
		}
		for(var i = 0; i < lis.length; i++) {
			if(count == i) {
				lis[i].style.background = 'yellow'
			} else {
				lis[i].style.background = 'black'
			}
		}
	}, 30)
}
//2.
function nextImg() {
	index--

}
//3.
var autoplay = setInterval(function() {
		changeImg()
		nextImg()
		for(var i = 0; i < lis.length; i++) {
	lis[i].onclick = function() {
		index = this.id - 1
		changeImg()
		resets()
	}

}

	}, 3000)
	//4.
function resets() {
	clearInterval(autoplay)
	autoplay = setInterval(function() {
		changeImg()
		nextImg()
		for(var i = 0; i < lis.length; i++) {
	lis[i].onclick = function() {
		index = this.id - 1
		changeImg()
		resets()
	}

}

	}, 3000)
}

//2.

//无限瀑布流*40==================================================//


var ratio;
		var colArr;

		function imgClick(ev) {
			ev.stopPropagation()
			$('body').css('overflow', 'visible')
			$('.masking')[0].style.display = 'block'
			var index = $(this).attr('index')
			var url = "img/big/" + index + ".jpg"
			var img = new Image()
			img.src = url
			img.onload = function() {
				var ableW = $(window).width() * 0.8
				var ableH = $(window).height() * 0.8
				var ableS = ableW / ableH
				var imgW = img.width
				var imgH = img.height
				var imgS = imgW / imgH
				if(ableS >= imgS) {
					$(".box").height(ableH);
					$(".box").width(ableH * imgS);
				} else {
					$(".box").width(ableW);
					$(".box").height(ableW / imgS);
				}
				$('.box').append($(img))
				var l = ($(window).innerWidth() - $('.box').outerWidth()) / 2
				var t = ($(window).innerHeight() - $('.box').outerHeight()) / 2
				$('.box').css({
					left: l,
					top: t
				})
			}
		}
		$(document).click(function() {
			$('.box').empty()
			$('.box').attr('style', '')
			$('body').css('overflow', 'auto')
			$('.masking').css('display', 'none')
		})

		function createLi(url, index) {
			var li = $("<li class='li'></li>");
			var a = $("<a href='javascript:'></a>")
			var div = $("<div></div>")
			var img = new Image()
			img.draggable = false
			a.append($(img))
			a.append(div)
			a.appendTo(li)
			a.attr('index', index)
			a.click(imgClick)
			img.src = url
			img.onload = function() {
				img.onload = null
				addLi(li)
				var minH = $(img).height()
			}
		}

		function addLi(li) {
			var index = minIndex()
			var l = $('.wrap').width() * ratio * index
			var t = colArr[index]
			li.css({
				left: l,
				top: t
			})
			li.appendTo($('.wrap'))
			colArr[index] += li.outerHeight()
		}

		function minIndex() {
			var index = 0
			for(var i = 1; i < colArr.length; i++) {
				if(colArr[index] > colArr[i]) {
					index = i
				}
			}
			return index
		}
		$(window).resize(function() {
			responseJudge()
			$(".masking").css("display", "none");
			$("body").css("overflow", "auto");
			var lis = $('li')
			for(var i = 0; i < lis.length; i++) {
				var index = minIndex()
				var l = $('.wrap').width() * ratio * index
				var t = colArr[index]
				lis.eq(i).css({
					left: l,
					top: t
				})
				colArr[index] += lis.eq(i).outerHeight()
			}
		})
		$(function() {
			responseJudge()
			for(var i = 1; i <= 39; i++) {

				var url = "img/small/" + (i) + ".jpg"
				createLi(url, i)
			}
		})

		function responseJudge() {
			var width = $(window).innerWidth()
			if(width > 992) {
				ratio = 1 / 4
				colArr = [0, 0, 0, 0]
			} else if(width > 480) {
				ratio = 1 / 3
				colArr = [0, 0, 0]
			} else {
				ratio = 1 / 2
				colArr = [0, 0]
			}
		}


//