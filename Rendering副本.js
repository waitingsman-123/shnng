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
var uls = document.querySelectorAll('#box>ul') //数组
var li;
var box = document.getElementById('box')

var count = 1

function wakaka() {
	for(var i = 0; i < 20; i++) {
		li = document.createElement('li')
		li.className = 'li'
		div = document.createElement('img')
		div.className = 'div'
		li.style.height = parseInt(Math.random() * 201 + 300) + 'px'
			//li.style.backgroundSize='23%/'+li.style.height
		li.innerHTML = count++
			minHeight()

		img.style.src = "url(Rendering_shining_files/室外1021更新-000" + (count + 1) + '.jpg)'
		if(i >= 9) {
		img.style.src = "url(Rendering_shining_files/室外1021更新-00" + (count + 1) + '.jpg)'

		}

		console.log(li)
		li.onclick = function() {
			alert('li')
		}

	}

	function minHeight() {
		var temp = 0
		for(var j = 1; j < uls.length; j++) {
			if(uls[temp].offsetHeight > uls[j].offsetHeight) {
				temp = j
			}
		}
		uls[temp].appendChild(li)
		li.appendChild(div)
	}
}

window.onscroll = function() {
	var cTop = document.documentElement.clientHeight
	var oTop = uls[0].offsetHeight
	var sTop = document.documentElement.scrollTop || document.body.scrollTop
	if(sTop >= (oTop - cTop)) {
		if(count >= 40) {
			return
		}

		wakaka()
	}
}

wakaka()



//