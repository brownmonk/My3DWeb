var Game = (function (G, $) {
    if(!$) {
        console.log('jQuery is not loaded!'); // Abort if Jquery is not loaded first
        return G;
    }

    var old_client = G.client;      // save old client
    var old_port = G.clientPort;    // save old port
    var old_gameBoard = G.GameBoard;// save old Game Board

    if(!old_client) {
        if(!old_port){
            G.clientPort = ':4006'; // Default port is arbitrarily 4006
        }
        G.client = io.connect(G.clientPort); // Set up client if client isn't already set
    }

    if(!old_gameBoard) {
        G.GameBoard = {}; // TODO: GameBoard Documentation

        G.GameBoard.Dimentions = {
            x:8,
            y:8,
            tileSize: 80
        };

        G.GameBoard.$ = $('<div></div>') // Dom element attached through "$"
            .attr('id','gameBoard')
            .css({
                width:G.GameBoard.Dimentions.tileSize * G.GameBoard.Dimentions.x,
                height:G.GameBoard.Dimentions.tileSize * G.GameBoard.Dimentions.y
            })
            .appendTo($('body'));

        G.GameBoard.$.css({
            top: $(document).height()/2 - G.GameBoard.$.height()/2, // Center gameboard
            left: $(document).width()/2 - G.GameBoard.$.width()/2
        });

        $(window).resize(function(){
            G.GameBoard.$.css({
                top: $(document).height()/2 - G.GameBoard.$.height()/2, // Center gameboard when window is resized
                left: $(document).width()/2 - G.GameBoard.$.width()/2
            });
        });
    }

    $(function () {
        G.client.on('connect', function () {
            G.client.emit('new_player_joined',{}); // TODO: What should happen when a new player has joined?
        });
    });

    return G;
}(Game || {}, jQuery));