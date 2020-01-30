url = $("#a").attr('href');

$(document).ready( function() {
	aff_sub = "C1289386-t1580363472853878370";
	transaction_id = "1023a881532df5ae41368b6c821f7d";

	// https://www.gomaji.com/shoproxyshplus.php?sku=2087794&ref=457&affiliateid=131&s_banner=85shop
	// &ref=457&RID={aff_sub}&Click_ID={transaction_id}
	gojiTargetUrl = url + "ref=457&RID=" + aff_sub + "&Click_ID=" + transaction_id;
	encodeGojiTargetUrl = encodeURIComponent(gojiTargetUrl);

	// http://tracking.shopmarketplacenetwork.com/aff_c?offer_id=2107&aff_id=12&source=ProductFeed&file_id=101&url=https%3A%2F%2Fwww.gomaji.com%2Fshoproxyshplus.php%3Fsku%3D2087794%26ref%3D457%26affiliateid%3D131%26s_banner%3D85shop%26ref%3D457%26RID%3D%7Baff_sub%7D%26Click_ID%3D%7Btransaction_id%7D&aff_sub=C1289386-t1580362833281604273
	redirect = "http://tracking.shopmarketplacenetwork.com/aff_c?offer_id=2107&aff_id=12&url=" 
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
