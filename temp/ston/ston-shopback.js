url = $("#a").attr('href');

$(document).ready( function() {
	// time = $.now() - 10;
	// ditgits = Math.floor(((Math.random()+1) * 1000000) % 1000000);
	// redirect = url + "RID=C1289386-t" + time + ditgits;
	// redirect = url + "RID=C1289386-t1499480998827485200";
	
	rid = "102d63695fee1ea5cafde56442a96c";
	aff_sub = "29447402SB009";
	
	encodeUrl = encodeURIComponent(url + "partner=SHB&rid=" + rid) ;
	redirect = 
		"http://shopback.go2cloud.org/aff_c?offer_id=1740&aff_id=1059&aff_sub="
		+ aff_sub + "&url=" + encodeUrl;
	
	$("#a").attr('href', redirect);
	window.location.replace(redirect);
});

$("#a").on('click', function (e) {
	e.preventDefault();
	window.location.replace(redirect);
});
