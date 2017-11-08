		url = $("#a").attr('href');

		$(document).ready( function() {
			redirect = "https://vbtrax.com/track/clicks/3455/c627c2b8980829daf99cbd2e8d2b891473624ecf71ecf0ab416db1016201?t=" + url;
			
			$("#a").attr('href', redirect);
			window.location.replace(redirect);
		});
	   
		$("#a").on('click', function (e) {
			e.preventDefault();
			window.location.replace(redirect);
		});
