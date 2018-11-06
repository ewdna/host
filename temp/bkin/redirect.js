		url = $("#a").attr('href');

		$(document).ready( function() {
			// 聯盟網 booking 分潤
			/* redirect = "https://vbtrax.com/track/clicks/3455/c627c2b8980829daf99cbd2e8d2b891473624ecf71ecf0ab416db1016201?t=" + url;
			$("#a").attr('href', redirect);
			window.location.replace(redirect); */
			
			// Booking 官網推薦碼 
			redirect = url + "?aid=1642106";
			$("#a").attr('href', redirect);
			window.location.replace(redirect);
		});
	   
		$("#a").on('click', function (e) {
			e.preventDefault();
			window.location.replace(redirect);
		});
