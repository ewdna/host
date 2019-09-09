var jquery = document.createElement('script');
jquery.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jquery);	

jquery.onload = function(){
    var script = document.createElement('script');
	script.src = "pc-shopback.js";
	document.getElementsByTagName('head')[0].appendChild(script);	
} 