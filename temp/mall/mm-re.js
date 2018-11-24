url = $("#a").attr('href');

$(document).ready( function() {

	redirect = url + "&memid=6000007978&cid=apuad&oid=1&osm=league"; // 陽
	
	$("#a").attr('href', redirect);
	window.location.replace(redirect);
});

$("#a").on('click', function (e) {
	e.preventDefault();
	window.location.replace(redirect);
});
