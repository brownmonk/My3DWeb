var Game = (function (G, $, THREE) {
    if(!G || !$ || !THREE) {
        console.log('Nothing useful is loaded!'); // Something is severely messed up, abort everything
        return G;
    }

    var myGame = new G.GameBoard({id:'myGame'});    // Make a new game
    myGame.start();                                 // Start that mofo

    var player1 = new G.Player({                    // Add a player
        name: 'Matt',
        gameId: 'myGame',
        callback: function(player){
            // TODO: Figure out a better aspect ratio or some way to handle aspect ratios
            player.geometry.position.x = -100;      // Place player at some default position
            player.geometry.position.y = 100;
            player.game.refresh();                  // re-render the shit out of the scene
            player.game.getPlayers(); // TODO: What to do next?
        }
    });

    var player2 = new G.Player({                    // Add another player
        name: 'Kendell',
        gameId: 'myGame',
        callback: function(player){
            player.geometry.position.x = 100;      // Place player at some other default position
            player.geometry.position.y = 100;
            player.game.refresh();                  // re-render the shit out of the scene
            player.game.getPlayers(); // TODO: What to do next?
        }
    });

    console.log(G.activeGameboards[0].getPlayers()); // Log the active players
    return G;
}(Game || {}, jQuery, THREE));