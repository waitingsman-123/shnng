var body = document.getElementsByTagName('body')[0]
var title = document.getElementById('title')

var shnngHtml=document.getElementsByClassName('shnngHtml')
var aboutHtml=document.getElementsByClassName('aboutHtml')
var renderingHtml=document.getElementsByClassName('renderingHtml')
var AnimationHtml=document.getElementsByClassName('3DAnimationHtml')
var bimHtml=document.getElementsByClassName('bimHtml')
var contactHtml=document.getElementsByClassName('contactHtml')
console.log(titleA)
//console.log(titleA[0].offsetWidth)
var titleA = document.querySelectorAll('#title>a')
for(var i = 0; i < titleA.length; i++) {
	titleA[i].style.width = (parseInt(titleA[i].offsetWidth + 10)) + 'px'
	titleA[i].onclick=function(){
		titleA[i].className='shnngHtml'
		
	}
	renderingHtml.onclick=function(){
		
	}
	
	
	
	
}
console.log(body.clientWidth) //1200
	//bug1.动态布局回来titleA乱了，刷新的话
