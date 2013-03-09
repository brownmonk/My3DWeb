var connect = require("connect");
var server = connect()
    .use(connect.static("client")) // client side root directory
    .use(function (request, response) {
        response.statusCode = 403; // All other request get a 403 err
        response.end("You have reached the end of the Internet.");
    }).listen(4006); // Remember to update this if the client side port changes

var socketio = require("socket.io");
var clients = socketio.listen(server);
var newPlayerService = require("./services").newPlayer;

clients.sockets.on('connection', function (client) {
    newPlayerService(clients,client);
});

console.log('*** SERVER HAS STARTED ***');
