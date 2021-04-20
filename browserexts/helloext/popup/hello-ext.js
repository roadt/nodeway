console.debug("popup script executed!");

function afterContentScript(){


	function getAImage() {
		var no = Math.ceil(Math.random() * 5)
		var imageUrl = browser.runtime.getURL(`images/${no}.jpg`);
		return imageUrl;
	}

	document.getElementById("get").addEventListener("click",  (e) => {
		document.getElementById("image").src = getAImage()
	});


	document.getElementById("send").addEventListener("click",  (e) => {

		function sendMessage(tabs) {
			console.debug(tabs);
			
			browser.tabs.sendMessage(tabs[0].id, {
				cmd: "image",
				url: document.getElementById("image").src || getAImage()
			})
		}

		function handleError(error){
			console.error(error)
		}

		console.info("aftere ContentScript executed");

		browser.tabs.query({active:true, currentWindow:true})
			.then(sendMessage).catch(handleError)
	});
}

function handleExecError(error) {
	console.error(error);
}

browser.tabs.executeScript({ 
	file: "/content_scripts/hello-ext.js"
}).then(afterContentScript)
	.catch(handleExecError)
