		url = $("#a").attr('href');

		$(document).ready( function() {
			redirect = "http://shopback.go2cloud.org/aff_c?offer_id=591&aff_id=1059&aff_sub=17740362SB009&url=" + url;
			
			$("#a").attr('href', redirect);
			window.location.replace(redirect);
		});
	   
		$("#a").on('click', function (e) {
			e.preventDefault();
			window.location.replace(redirect);
		});
