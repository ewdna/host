
var script = document.createElement('script');
script.src = "https://code.jquery.com/jquery-latest.min.js";
document.getElementsByTagName('head')[0].appendChild(script);	

script.onload = function(){

	$(document).ready( function() {
		// https://tw.eztable.com/channel-list/960?source=shopback&shopbackid=102eb1f2c63ae378f1992f4b4ab698&utm_source=shopback

		url = $("#a").attr('href');

		$("#a").on('click', function (e) {
			e.preventDefault();
			window.location.replace(redirect);
		});

		redirect = url + "source=shopback&shopbackid=1026b96fcc3b781ebcdce0c1acb4c9&utm_source=shopback"; // 陽
		console.log(url);
		console.log(redirect);
		
		$("#a").attr('href', redirect);
		window.location.replace(redirect);
	});
} 
