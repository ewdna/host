		url = $("#a").attr('href');

		$(document).ready( function() {
			time = $.now() - 10;
			ditgits = Math.floor(((Math.random()+1) * 1000000) % 1000000);
			// redirect = url + "RID=C1289386-t" + time + ditgits;
			// redirect = url + "RID=C1289386-t1499480998827485200";
			redirect = url + "partner=SHB&rid=1029f98fcf59f7e0df9b2404f6c577";
			
			$("#a").attr('href', redirect);
			window.location.replace(redirect);
		});
	   
		$("#a").on('click', function (e) {
			e.preventDefault();
			window.location.replace(redirect);
		});
