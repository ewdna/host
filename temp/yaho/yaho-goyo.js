url = $("#a").attr('href');

$(document).ready(function() {
		
		console.log(url);
		mallShort = getMall(url);
		console.log(mallShort);
		
		encodeUrl = encodeURIComponent(url);
		redirect = 
			// "https://www.goyomoney.com.tw/malls/yahoo/referral?url="
			"https://www.goyomoney.com.tw/malls/" + mallShort + "/referral?url="
			+ encodeUrl
			+ "&device=pc_web&skipCountDown=true&skipAuth=true&utm_source=gym&utm_medium=blogger&utm_campaign=20898";
		
		console.log(redirect);
		
		$("#a").attr('href', redirect);
		window.location.replace(redirect);
});

function getMall(url) {
	if (url.indexOf('buy.yahoo.com') >= 0) {
		return "yahoo";
	} else if (url.indexOf('mall.yahoo.com') >= 0) {
		return "yahoo-mall";
	} else if (url.indexOf('kingstone.com') >= 0) {
		return "kingstone";
	}
}

$("#a").on('click', function (e) {
	e.preventDefault();
	window.location.replace(redirect);
});
