		url = $("#a").attr('href');

		$(document).ready( function() {
			redirect = "http://shopback.go2cloud.org/aff_c?offer_id=591&aff_id=1059&aff_sub=21480679SB009&url=" + url;
			/* tail = "ref=558&gym_tripid=w5gk63g6"
			if (-1 != url.indexOf("3ANBM")) {
				redirect = url + "&" + tail;
			} else {
				redirect = url + "?" + tail;
			} */
			
			$("#a").attr('href', redirect);
			window.location.replace(redirect);
		});
	   
		$("#a").on('click', function (e) {
			e.preventDefault();
			window.location.replace(redirect);
		});
