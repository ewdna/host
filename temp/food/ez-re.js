
var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(script);	

script.onload = function(){

	$(document).ready( function() {
		// https://tw.eztable.com/channel-list/960?source=shopback&shopbackid=102eb1f2c63ae378f1992f4b4ab698&utm_source=shopback

		url = $("#a").attr('href');

		$("#a").on('click', function (e) {
			e.preventDefault();
			window.location.replace(redirect);
		});

		// redirect = url + "source=shopback&shopbackid=102341a8dadb2382eb360992892909&utm_source=shopback"; // shopback
		redirect = url + "utm_source=blogger2019&utm_medium=EZ_ewdna"; // ez
		console.log(url);
		console.log(redirect);
		
		$("#a").attr('href', redirect);
		window.location.replace(redirect);
	});
} 
