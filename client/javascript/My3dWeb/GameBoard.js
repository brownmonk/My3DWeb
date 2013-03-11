var Game = (function (G, $, THREE) {

    G.GameBoard = {
        players: [] // Container for players
    };

    G.GameBoard.Dimensions = {
        x:10,           // Number of tiles across
        y:6,            // Number of tiles down
        tileSize: 100   // Tile units are in pixels
    };

    // Gameboard Document Object
    G.GameBoard.$ = $('<div></div>') // Dom element attached to "$"
        .attr('id','gameBoard')
        .css({
            width:G.GameBoard.Dimensions.tileSize * G.GameBoard.Dimensions.x,
            height:G.GameBoard.Dimensions.tileSize * G.GameBoard.Dimensions.y,
            backgroundSize: G.GameBoard.Dimensions.tileSize + "px " +
                G.GameBoard.Dimensions.tileSize + "px"
        })
        .appendTo($('body'));

    G.GameBoard.$.css({
        top: $(document).height()/2 - G.GameBoard.$.height()/2, // Center game board element on screen
        left: $(document).width()/2 - G.GameBoard.$.width()/2
    });

    $(window).resize(function(){
        G.GameBoard.$.css({
            top: $(document).height()/2 - G.GameBoard.$.height()/2, // Re-center game board when window is re-sized
            left: $(document).width()/2 - G.GameBoard.$.width()/2
        });
    });

    // Gameboard 3D Awesome Stuff
    G.GameBoard.renderer = new THREE.WebGLRenderer(); // Gameboard 3D renderer
    G.GameBoard.renderer.setSize(G.GameBoard.$.width(),G.GameBoard.$.height()); // Render is same size as DOM object
    G.GameBoard.scene = new THREE.Scene();            // Gameboard 3D scene
    G.GameBoard.lights = {
        ambientLight: new THREE.AmbientLight(0x111111),
        sunLight: (function(){
            var pointLight = new THREE.PointLight(0xFFFFFF);
            pointLight.position.x = 100;
            pointLight.position.y = 0;
            pointLight.position.z = 150;
            return pointLight;
        }())
    };
    G.GameBoard.camera = new THREE.PerspectiveCamera( // Gameboard camera & properties
        90, // View angle
        G.GameBoard.$.width()/G.GameBoard.$.height(), // Aspect
        0.10,     // Near
        10000   // Far
    );
    G.GameBoard.camera.position.z = 400;
    G.GameBoard.scene.add(G.GameBoard.lights.ambientLight); // Add ambient light
    G.GameBoard.scene.add(G.GameBoard.lights.sunLight);     // Add sun light
    G.GameBoard.scene.add(G.GameBoard.camera);              // Add Camera to the scene
    G.GameBoard.renderer.render(
        G.GameBoard.scene,
        G.GameBoard.camera
    );
    G.GameBoard.$.append(G.GameBoard.renderer.domElement); // Add 3D renderer to the DOM

    G.GameBoard.refresh = function(){ // Re-render default and camera whenever called
        G.GameBoard.renderer.render(
            G.GameBoard.scene,
            G.GameBoard.camera
        );
    }

    G.GameBoard.refresh(); // re-render the shit out of the scene

    return G;
})(Game || {}, jQuery, THREE);