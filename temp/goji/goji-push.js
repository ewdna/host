url = $("#a").attr('href');

$(document).ready( function() {
	redirect = url + "pid=231849&utm_medium=iphone&utm_campaign=share&utm_content=231849&share_code=AGBCBCHEAIHCBHAEBBBDAHBGBLHPANHNBMAEBBBJAMBABJHPALHHBEAPBDBDAPBPBOHHAJHH&utm_source=other";
	
	$("#a").attr('href', redirect);
	window.location.replace(redirect);
});

$("#a").on('click', function (e) {
	e.preventDefault();
	window.location.replace(redirect);
});
