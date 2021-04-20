(function() {

	// check and ensure script is only injected into  page once
	if (window.hasRun) {
		return ;
	}
	window.hasRun = true;

	// still paint border
	document.body.style.border = "1px dotted red";

	//
	console.debug("hello. message from hello-ext here.");


	// funcs
	function ensureImageNode(id) {
		imgElem = document.getElementById(id);
		body = document.body;
		if (! imgElem) {
			imgElem = document.createElement("img");
			imgElem.id = id;
			body.insertBefore(imgElem, body.firstChild);
		}
		return imgElem;
	}

	function setImageUrl(url) {
		imageElem = ensureImageNode("image");
		console.log(imageElem);
		imageElem.src = url;
	}

	// listen background message
	browser.runtime.onMessage.addListener((message) => {
		console.log("got message %s. message from hello-ext here.", message);
		console.dir(message);
		setImageUrl(message.url);
	});

})();

