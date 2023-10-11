var search = location.search;
var redirect = "https://www.card.rakuten.com.tw/corp/campaign/";

if (search) {
	var code = search.substr(6);
	if (code) {
		redirect = "https://www.card.rakuten.com.tw/corp/campaign/cpn.xhtml?code=" + code;
	}
}

var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(script);	
script.onload = function(){

	$(document).ready( function() {
		console.log(redirect);
		$("a:first").attr('href', redirect);
		window.location.replace(redirect);
	});
}
