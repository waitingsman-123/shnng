
var body = document.getElementsByTagName('body')[0]
var title = document.getElementById('title')
var titleA = document.querySelectorAll('#title>a')
console.log(titleA)
console.log(titleA[0].offsetWidth)
for(var i = 0; i < titleA.length; i++) {
	titleA[i].style.width = (parseInt(titleA[i].offsetWidth + 10)) + 'px'
}
console.log(body.clientWidth) //1200