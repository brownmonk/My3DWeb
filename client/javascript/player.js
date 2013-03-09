var Game = (function (G, $, THREE) {
    if(!$) {
        console.log('jQuery is not loaded!'); // Abort if jQuery is not loaded first
        return G;
    }
    if(!THREE) {
        console.log('Three is not loaded!'); // Abort if ThreeJS is not loaded first
        return G;
    }
    if(!G.GameBoard){
        console.log('Game board is not loaded!'); // Abort if the game board is not loaded first
        return G;
    }

    var old_player = G.Player;    // save old Game Board (if any)
    if(!old_player) G.Player = function (options) {
        self = this;
        self.name = options.name || "noname";
        self.material = options.material || new THREE.MeshLambertMaterial({ // Players are gray by default
            color:0xaaaaaa
        });
        self.geometry = options.geometry || new THREE.Mesh(// Players are cubes by default
            new THREE.CubeGeometry(
                100, 100, 100
            ),
            self.material
        );

        G.GameBoard.players.push({  // Add player to game board list
            name:self.name,
            THREE:self.geometry
        });
        G.GameBoard.scene.add(self.geometry);   // Add player to the scene
        G.GameBoard.refresh();                  // re-render the shit out of the scene
        if (options.callback instanceof Function) options.callback(self); // run callback if any
    };

    var player = new G.Player({
        callback: function(self){
            // TODO: Figure out a better aspect ratio or some way to handle aspect ratios
            self.geometry.position.x = -100; // Place player at some default position
            self.geometry.position.y = 100;
            G.GameBoard.refresh(); // re-render the shit out of the scene
        }
    });

    return G;
}(Game || {}, jQuery, THREE));