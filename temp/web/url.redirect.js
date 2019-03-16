function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var url = getParameterByName('url');

if (url) {
	var script = document.createElement('script');
	script.src = "https://code.jquery.com/jquery-latest.min.js";
	document.getElementsByTagName('head')[0].appendChild(script);	

	console.log(url);
	
	script.onload = function(){

		$(document).ready( function() {
			// https://www.conn.tw/conn/redirect_wa.php?k=1OT76&tourl=https%3A%2F%2Fwww.kingstone.com.tw%2F
			
			encodeUrl = encodeURIComponent(url);
			redirect = 
				"https://www.conn.tw/conn/redirect_wa.php?k=1OT76&tourl=" + 
				encodeUrl;
			
			console.log(redirect);
			
			$("#a").attr('href', redirect);
			window.location.replace(redirect);
		});
	} 
}
