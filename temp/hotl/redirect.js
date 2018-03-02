		url = $("#a").attr('href');

		$(document).ready( function() {
			// hotels.com 固定獎金
			redirect = "https://vbtrax.com/track/clicks/1096/c627c2b8980323dffc9cbd2e8d2b891473624ecf71ecf0ab416db3056e02?t=" + url;
			
			$("#a").attr('href', redirect);
			window.location.replace(redirect);
		});
	   
		$("#a").on('click', function (e) {
			e.preventDefault();
			window.location.replace(redirect);
		});
