url = $("#a").attr('href');

$(document).ready( function() {
	aff_sub = "36026630SB009";
	transaction_id = "1024818e7eaf18b00b9624862fcbc1";

	// https://www.gomaji.com/ref_shopback_entry.php?ref=543&transaction_id=
	// &ref=543&transaction_id=102da3d8538f4fa35f8ccc90fb1407
	gojiTargetUrl = url + "ref=543&transaction_id=" + transaction_id;
	encodeGojiTargetUrl = encodeURIComponent(gojiTargetUrl);

	// http://shopback.go2cloud.org/aff_c?offer_id=591&aff_id=1059&url=https%3A%2F%2Fwww.gomaji.com%2Fch%2F700097%3Fcity%3D1%26ref%3D543%26transaction_id%3D{transaction_id}&aff_sub=30687355SB009
	redirect = "http://shopback.go2cloud.org/aff_c?offer_id=591&aff_id=1059&url=" 
		+ encodeGojiTargetUrl + "&aff_sub=" + aff_sub;

	/*
	console.log(url);
	console.log(encodeUrl);	
	console.log(gojiTargetUrl);	
	console.log(encodePcTargetUrl);	
	console.log(redirect);	
	*/
		
	$("#a").attr('href', redirect);
	window.location.replace(redirect);
});

$("#a").on('click', function (e) {
	e.preventDefault();
	window.location.replace(redirect);
});
