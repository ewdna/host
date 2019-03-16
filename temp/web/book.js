var search = location.search;
var url = search.substr(5);

if (url) {
	var script = document.createElement('script');
	script.src = "https://code.jquery.com/jquery-latest.min.js";
	document.getElementsByTagName('head')[0].appendChild(script);	

	console.log(url);
	
	script.onload = function(){

		$(document).ready( function() {
			// https://activity.books.com.tw/crosscat/show/A00000005462?loc=dbanner_001
			// https://www.books.com.tw/products/0010813689
			
			url = url.replace("https://www.books.com.tw/", "https://www.books.com.tw/exep/assp.php/books_werdna/");
			url = url.replace("https://activity.books.com.tw/", "https://www.books.com.tw/exep/assp.php/books_werdna/http_activity/");
			redirect = url;
			console.log(redirect);
			
			$("#a").attr('href', redirect);
			window.location.replace(redirect);
		});
	} 
}
