var connect = require("connect");
var server = connect()
    .use(connect.static("client")) // This changes if you are on Cloud 9
    .use(function (request, response) {
        response.statusCode = 403;
        response.end("You have reached the end of the Internet.");
    }).listen(4006);

var socketio = require("socket.io");
var clients = socketio.listen(server);
var loginService = require("./services").login;

clients.sockets.on('connection', function (client) {
    loginService(clients,client);
});

console.log('*** SERVER HAS STARTED ***');
