var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(script);	

script.onload = function(){
    url = $("#a").attr('href');

	$(document).ready( function() {
		redirect = url;
		$("#a").attr('href', redirect);
		window.location.replace(redirect);
	});

	$("#a").on('click', function (e) {
		e.preventDefault();
		window.location.replace(redirect);
	});
} 

