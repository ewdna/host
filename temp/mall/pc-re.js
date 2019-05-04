		url = $("#a").attr('href');

		$(document).ready( function() {
			aff_sub = "29079933SB009";
			transaction_id = "10247f57117d5cdade73223e32def8";
			encodeUrl = encodeURIComponent(url);
		
			// https://shopping.pchome.com.tw/platshop/v1/platshop/shopback?utm_source=shopback&utm_medium=cps&transaction_id=10241e5bea4a64b473b85c8ce1424e&rurl=https%3A%2F%2Fshopping.pchome.com.tw%2Fcdn%2Factivity%2Fcampaign%2FC974060247
			// https://shopping.pchome.com.tw/platshop/v1/platshop/shopback?utm_source=shopback&utm_medium=cps&transaction_id=10241e5bea4a64b473b85c8ce1424e&rurl=https%3A%2F%2Fshopping.pchome.com.tw%2Fedm%2Fcard%2Fregister%2FR43081954.htm
			pcTargetUrl = "https://shopping.pchome.com.tw/platshop/v1/platshop/shopback?utm_source=shopback&utm_medium=cps&transaction_id="
				+ transaction_id + "&rurl=" + encodeUrl;
			encodePcTargetUrl = encodeURIComponent(pcTargetUrl);
		
			// http://shopback.go2cloud.org/aff_c?offer_id=2396&aff_id=1059&url=https%3A%2F%2Fshopping.pchome.com.tw%2Fplatshop%2Fv1%2Fplatshop%2Fshopback%3Futm_source%3Dshopback%26utm_medium%3Dcps%26transaction_id%3D%7Btransaction_id%7D%26rurl%3Dhttps%253A%252F%252Fshopping.pchome.com.tw%252Fcdn%252Factivity%252Fcampaign%252FC974060247&aff_sub=26370282SB009
			// http://shopback.go2cloud.org/aff_c?offer_id=2396&aff_id=1059&url=https%3A%2F%2Fshopping.pchome.com.tw%2Fplatshop%2Fv1%2Fplatshop%2Fshopback%3Futm_source%3Dshopback%26utm_medium%3Dcps%26transaction_id%3D10241e5bea4a64b473b85c8ce1424e%26rurl%3Dhttps%253A%252F%252Fshopping.pchome.com.tw%252Fedm%252Fcard%252Fregister%252FR43081954.htm&aff_sub=26370282SB009
			redirect = "http://shopback.go2cloud.org/aff_c?offer_id=2396&aff_id=1059&url=" 
				+ encodePcTargetUrl + "&aff_sub=" + aff_sub;

			/*
			console.log(url);
			console.log(encodeUrl);	
			console.log(pcTargetUrl);	
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
