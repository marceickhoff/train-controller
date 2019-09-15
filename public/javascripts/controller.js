var socket = io();

function updatePanel(data) {
	// not supported yet
}

function selectPanel(name) {
	window.location.href = window.location.host + '/' + name;
}

function toggleFullscreen() {
	if (document.fullScreenElement || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
		if (document.documentElement.requestFullScreen) {
			document.documentElement.requestFullScreen();
		} else if (document.documentElement.mozRequestFullScreen) {
			document.documentElement.mozRequestFullScreen();
		} else if (document.documentElement.webkitRequestFullScreen) {
			document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
		}
	}
	else {
		if (document.cancelFullScreen) {
			document.cancelFullScreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}
	}
}

function send(data) {
	socket.emit('send', data);
}

socket.on('update', function(data) {
	updatePanel(data);
});