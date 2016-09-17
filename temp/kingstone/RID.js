		url = $("#a").attr('href');

		$(document).ready( function() {
			time = $.now();
			ditgits = Math.floor(((Math.random()+1) * 1000000) % 1000000);
			redirect = url + "RID=C1289386-t" + time + ditgits;
			
			$("#a").attr('href', redirect);
			window.location.replace(redirect);
		});
	   
		$("#a").on('click', function (e) {
			e.preventDefault();
			window.location.replace(redirect);
		});
