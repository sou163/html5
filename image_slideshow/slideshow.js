var index = 0;
const names = ['hallerbos forest, belgium', 'iceland', 'loei, thailand', 'new zealand', 'seine, norway'];
var len = names.length;

// showSlide(index);
slideShow();

// button controls
function slides(value){
	index += value;
	showSlide(index);
}

// dot controls
function changeSlide(value){
	showSlide(value);
}

function slideShow(){
	console.log(len);
	if(index >= len)
		index = 0;
	else if(index < 0)
		index = len-1;
	
	document.getElementById('numbers').innerHTML = '<b>' + (index+1) + ' / ' + len + '</b>';
	var image = '<img src="D:\\wallpapers\\' + names[index] + '.png" width="800" height="650">';
	document.getElementById('images').innerHTML = image;
	document.getElementById('captions').innerHTML = '<b>' + names[index] + '</b>';

	index++;
	setTimeout(slideShow, 3000);
}

function showSlide(value){
	var dots = document.getElementsByClassName('dots');
	var d_len = dots.length;

	if(value >= len)
		index = 0;
	else if(value < 0)
		index = len-1;

	value = index;

	for(var i=0; i<len; i++){
		if(value == i){
			document.getElementById('numbers').innerHTML = '<b>' + (value+1) + ' / ' + len + '</b>';
			var image = '<img src="D:\\wallpapers\\' + names[i] + '.png" width="800" height="650">';
			document.getElementById('images').innerHTML = image;
			document.getElementById('captions').innerHTML = '<b>' + names[i] + '</b>';
		} 
	}
	// for(var i=0; i<d_len; i++){
	// 	dots[i].className = dots[i].className.replace("active", "");
	// }
	// slides[index-1].style.display = "block";
	// dots[index-1].className += "active";
}