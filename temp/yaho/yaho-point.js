url = $("#a").attr('href');

$(document).ready( function() {
	
	// https://tw.partner.buy.yahoo.com:443/gd/buy?mcode=MV91cDdvUWd3YWhjOFczLzd3YmpvWUIra0hJK2lya2dBWDBkcUE0MUZnUm84PQ==&url=https%3A%2F%2Ftw.buy.yahoo.com%2F
	
	console.log(url);
	encodeUrl = encodeURIComponent(url);
	redirect = 
		"https://tw.partner.buy.yahoo.com:443/gd/buy?mcode=MV91cDdvUWd3YWhjOFczLzd3YmpvWUIra0hJK2lya2dBWDBkcUE0MUZnUm84PQ==&url="
		+ encodeUrl;
	
	console.log(redirect);
	
	$("#a").attr('href', redirect);
	window.location.replace(redirect);
});

$("#a").on('click', function (e) {
	e.preventDefault();
	window.location.replace(redirect);
});
