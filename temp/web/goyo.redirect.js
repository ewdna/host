url = $("#a").attr('href');

$(document).ready( 

	function() {
		
		console.log(url);
		mallShort = getMall(url);
		console.log(mallShort);
		
		encodeUrl = encodeURIComponent(url);
		redirect = 
			// "https://www.goyomoney.com.tw/malls/cashback/yahoo/referral?url="
			"https://www.goyomoney.com.tw/malls/cashback/" + mallShort + "/referral?url="
			+ encodeUrl
			+ "&device=pc_web&skipCountDown=true&skipAuth=true&utm_source=gym&utm_medium=blogger&utm_campaign=20898";
		
		console.log(redirect);
		
		$("#a").attr('href', redirect);
		window.location.replace(redirect);
	});

	function getMall(url) {
		if (url.indexOf('kingstone.com') >= 0) {
			return "kingstone";
		} else if (url.indexOf('rakuten.com') >= 0) {
			return "rakuten";
		} else if (url.indexOf('udn.com') >= 0) {
			return "udn";
		} else if (url.indexOf('friday.tw') >= 0) {
			return "friday";
		} else if (url.indexOf('buy.yahoo.com') >= 0) {
			return "yahoo";
		} else if (url.indexOf('mall.yahoo.com') >= 0) {
			return "yahoo-mall";
		}
	}

$("#a").on('click', function (e) {
	e.preventDefault();
	window.location.replace(redirect);
});
