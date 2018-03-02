		url = $("#a").attr('href');

		$(document).ready( function() {
			// agoda 分潤
			redirect = "https://vbtrax.com/track/clicks/3408/c627c2b8980828d6f09cbd2e8d2b891473624ecf71ecf0ab416db101670c?t=" + url;
			
			$("#a").attr('href', redirect);
			window.location.replace(redirect);
		});
	   
		$("#a").on('click', function (e) {
			e.preventDefault();
			window.location.replace(redirect);
		});
