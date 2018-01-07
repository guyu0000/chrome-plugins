var qrcode = new QRCode("qrcode", {
    width: 180,
    height: 180,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

function gen(url) {
	qrcode.clear();
	qrcode.makeCode(url);
};

chrome.tabs.getSelected(null, function(tab) {
	gen(tab.url);
});