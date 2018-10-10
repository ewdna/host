		url = $("#a").attr('href');

		$(document).ready( function() {
			// time = $.now() - 10;
			// ditgits = Math.floor(((Math.random()+1) * 1000000) % 1000000);
			// redirect = url + "RID=C1289386-t" + time + ditgits;
			// redirect = url + "RID=C1289386-t1499480998827485200";
			
			encodeUrl = encodeURIComponent(url + "partner=SHB&rid=102c55007a5a7aaebd040bc2b076d9");
			redirect = 
				"http://shopback.go2cloud.org/aff_c?offer_id=1740&aff_id=1059&aff_sub=22114513SB009&url=" + 
				encodeUrl;
			
			$("#a").attr('href', redirect);
			window.location.replace(redirect);
		});
	   
		$("#a").on('click', function (e) {
			e.preventDefault();
			window.location.replace(redirect);
		});
