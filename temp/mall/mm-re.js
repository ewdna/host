var jquery = document.createElement('script');
jquery.src = "https://code.jquery.com/jquery-latest.min.js";
document.getElementsByTagName('head')[0].appendChild(jquery);	

jquery.onload = function(){
    var script = document.createElement('script');
	// script.src = "mm-point.js";
	script.src = "../web/conn.redirect.js";
	document.getElementsByTagName('head')[0].appendChild(script);	
} 