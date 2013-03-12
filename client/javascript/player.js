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
    G.Player = function (options) {
        var Self = this;
        Self.name = options.name || "noname";
        Self.material = options.material || new THREE.MeshLambertMaterial({ // Players are gray by default
            color:0xaaaaaa
        });
        Self.geometry = options.geometry || new THREE.Mesh(// Players are cubes by default
            new THREE.CubeGeometry(
                100, 100, 100
            ),
            Self.material
        );
        Self.gameId = options.gameId || "defaultGame";
        for(var i=0; i < G.activeGameboards.length; i++){
            var targetGameId = G.activeGameboards[i].$.attr('id');
            if(targetGameId == Self.gameId) {
                G.activeGameboards[i].players.push({  // Add player to game board list
                    name:Self.name,
                    THREE:Self.geometry
                });
                G.activeGameboards[i].scene.add(Self.geometry);   // Add player to the scene
                G.activeGameboards[i].refresh();
                Self.game = G.activeGameboards[i]; // Bind game board to player
            }
        }
        if (options.callback instanceof Function) options.callback(Self); // run callback if any
    };

    return G;
}(Game || {}, jQuery, THREE));