url = $("#a").attr('href');

$(document).ready( function() {
	
	console.log(url);
	encodeUrl = encodeURIComponent(url);
	redirect = 
		"https://www.goyomoney.com.tw/malls/kingstone/referral?url="
		+ encodeUrl
		+ "&device=pc_web&skipCountDown=true&skipAuth=true&utm_source=gym&utm_medium=blogger&utm_campaign=20898";
	
	console.log(redirect);
	
	$("#a").attr('href', redirect);
	window.location.replace(redirect);
});

$("#a").on('click', function (e) {
	e.preventDefault();
	window.location.replace(redirect);
});
