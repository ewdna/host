		url = $("#a").attr('href');

		$(document).ready( function() {
			// time = $.now() - 10;
			// ditgits = Math.floor(((Math.random()+1) * 1000000) % 1000000);
			// redirect = url + "RID=C1289386-t" + time + ditgits;
			// redirect = url + "RID=C1289386-t1499480998827485200";
			
			redirect = 
				"http://shopback.go2cloud.org/aff_c?offer_id=1740&aff_id=1059&aff_sub=21986512SB009&url=" + 
				url + "partner=SHB&rid=102fd92a3075892bb9b58a190ab1d5";
			
			$("#a").attr('href', redirect);
			window.location.replace(redirect);
		});
	   
		$("#a").on('click', function (e) {
			e.preventDefault();
			window.location.replace(redirect);
		});
