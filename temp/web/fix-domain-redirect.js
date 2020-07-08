function fixTool(){
	var links = document.getElementsByTagName('a');
	var regex = /g.ewdna.com\//;
	
	for(var i=0; i<links.length; i++){
	
		// console.log(links[i].href);
		// console.log(links[i].href.match(regex));
		if(links[i].href.match(regex)){
			console.log(links[i]);
			/* links[i].onclick = function(){
				var linkHref = this.href;
				this.href = linkHref.replace(regex,'storage.googleapis.com/ewgit/temp/');
				console.log(this.href);
			}*/
		}
	}
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

addLoadEvent(fixTool);