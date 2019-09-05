var socket = io();

var send = function(data) {
	socket.emit('send', data);
};

socket.on('update', function(data) {
	//TODO
});