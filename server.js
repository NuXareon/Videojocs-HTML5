var io = require('socket.io').listen(4242);
io.set('log level',1);

io.sockets.on('connection', function(socket) {
	console.log('A socket has conected');

	socket.on('sendMessage', function (data) {
		io.sockets.emit('printMessage',{username:data.username,message:data.message});
	})
});