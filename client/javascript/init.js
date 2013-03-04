$(function () {
	var client = io.connect(':4005'); // Port 4005 is default, link is http://localhost:4005
	client.on('connect', function () {
		client.emit('login',{})
    });
});