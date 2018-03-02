		url = $("#a").attr('href');

		$(document).ready( function() {
			// expedia 固定獎金
			redirect = "https://vbtrax.com/track/clicks/1006/c627c2b8980829d9fd9cbd2e8d2b891473624ecf71ecf0ab416db3056702?t=" + url;
			
			$("#a").attr('href', redirect);
			window.location.replace(redirect);
		});
	   
		$("#a").on('click', function (e) {
			e.preventDefault();
			window.location.replace(redirect);
		});
