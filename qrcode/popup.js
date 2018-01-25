(function() {
	var qrcode = new QRCode('qrcode', {
        width: 180,
        height: 180,
        colorDark : "#000000",
    	colorLight : "#ffffff",
    	correctLevel : QRCode.CorrectLevel.H
    });

    function makeCode(url) {
		qrcode.clear();
		qrcode.makeCode(url);
	};
	
	chrome.tabs.getSelected(null, function(tab) {
		makeCode(tab.url);
	});
})();