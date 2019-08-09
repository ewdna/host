var jquery = document.createElement('script');
jquery.src = "https://code.jquery.com/jquery-latest.min.js";
document.getElementsByTagName('head')[0].appendChild(jquery);	

jquery.onload = function(){
    var script = document.createElement('script');
	// script.src = "goji-shopback.js";
	script.src = "goji-push.js";
	document.getElementsByTagName('head')[0].appendChild(script);	
} 