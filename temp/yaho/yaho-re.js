var jquery = document.createElement('script');
jquery.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jquery);	

jquery.onload = function(){
	
    var script = document.createElement('script');
	// script.src = "yaho-point.js";
	// script.src = "yaho-goyo.js";
	script.src = "../web/goyo.redirect.js";
	// script.src = "../web/conn.redirect.js";
	document.getElementsByTagName('head')[0].appendChild(script);	
} 