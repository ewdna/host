var search = location.search;
var url = search.substr(5);

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

		$("#a").on('click', function (e) {
			e.preventDefault();
			window.location.replace(redirect);
		});
	} 
}
