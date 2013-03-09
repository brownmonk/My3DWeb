var Game = (function (G, $) {
    var old_client = G.client;  // save old client
    var old_port = G.clientPort; // save old port
    var old_gameBoard = G.GameBoard; // save old Game Board

    if(!old_client){
        if(!old_port){
            G.clientPort = ':4006'; // Default port is arbitrarily 4006
        }
        G.client = io.connect(G.clientPort); // Set up client if client isn't already set
    }

    if(!$) {
        console.log('jQuery is not loaded!'); // Abort if Jquery is not loaded first
        return G;
    }

    if(!old_gameBoard){
        G.GameBoard = {}; // TODO: What does the gameboard contain or do?
        G.GameBoard.$ = $('<div></div>') // Dom element attached through "$"
            .attr('id','gameBoard')
            .appendTo($('body'));
    }

    $(function () {
        G.client.on('connect', function () {
            G.client.emit('new_player_joined',{}); // TODO: What should happen when a new player has joined?
        });
    });

    return G;
}(Game || {}, jQuery));

