url = $("#a").attr('href');

$(document).ready(function () {
	let aff_sub = "0me0p9dab018npstSB009";
	let transaction_id = "102b562b09263de22f33ebbe81965c";

	// 取得原始 URL
	let url = $("#a").attr('href');

	// 在原始網址後加上 utm 參數與 transaction_id
	let utmUrl = new URL(url);
	utmUrl.searchParams.set("utm_source", "shopback");
	utmUrl.searchParams.set("utm_medium", "cps");
	utmUrl.searchParams.set("transaction_id", transaction_id);

	// 將 utmUrl 編碼後當作參數塞入 shopback redirect URL
	let redirect = "https://shopback.go2cloud.org/aff_c?offer_id=2396&aff_id=1059&url="
		+ encodeURIComponent(utmUrl.toString())
		+ "&aff_sub=" + aff_sub;

	// 設定 <a> 的 href，並立即跳轉
	$("#a").attr('href', redirect);
	window.location.replace(redirect);
});

// 防止點擊時重複導向處理
$("#a").on('click', function (e) {
	e.preventDefault();
	window.location.replace($(this).attr('href'));
});
