var Game = (function (G, $, THREE) {
    if(!$) {
        console.log('jQuery is not loaded!'); // Abort if jQuery is not loaded first
        return G;
    }
    if(!THREE) {
        console.log('Three is not loaded!'); // Abort if ThreeJS is not loaded first
        return G;
    }
    // Continue if dependencies are present

    G.clientPort = ':4006'; // Port is arbitrarily 4006 if no port is previously declared
    G.client = io.connect(G.clientPort); // Set up client if client isn't already set

<<<<<<< HEAD
    if(!old_client) {
        if(!old_clientPort){
            G.clientPort = ':4006'; // Port is arbitrarily 4006 if no port is previously declared
        }
        G.client = io.connect(G.clientPort); // Set up client if client isn't already set
    }

    if(!G.activeGameboards) G.activeGameboards = []; // Create a container for active game boards
    if(!old_gameBoard) G.GameBoard = function (options) {
        var Self = this;
        // Game board Dimensions and Tile size Management
        this.Dimensions = options.Dimensions || {
            x:10, // Number of tiles across
            y:6, // Number of tiles down
            tileSize:100   // Tile units are in pixels
        };
        // Game board DOM element Management
        this.container = options.container || $('body'); // Body is the default game board container
        this.$ = $('<div></div>') // Dom element attached to "$"
            .attr('id', options.id || 'defaultGame')
            .addClass('gameBoard')
            .css({
                width:Self.Dimensions.tileSize * Self.Dimensions.x,
                height:Self.Dimensions.tileSize * Self.Dimensions.y,
                backgroundSize:Self.Dimensions.tileSize + "px " +
                    Self.Dimensions.tileSize + "px"
            })
            .appendTo(Self.container);
        if (!options.nocenter) this.$.css({
            top:$(document).height() / 2 - Self.$.height() / 2, // Center game board element on screen
            left:$(document).width() / 2 - Self.$.width() / 2
        });
        if (!options.nocenter) $(window).resize(function () {
            Self.$.css({
                top:$(document).height() / 2 - Self.$.height() / 2, // Re-center game board when window is re-sized
                left:$(document).width() / 2 - Self.$.width() / 2
            });
        });
        // Game board Player Management
        this.players = options.players || []; // Container for players
        this.getPlayers = function (cb) {
            for (var i = 0; i < Self.players.length; i++) {
                // var player = Self.players[i];
                // TODO: Interrogate players more, get/verify locations, names, etc
            }
            if (cb instanceof Function) {
                cb(Self.players);
                return Self.players;
            } // run callback if any
            return Self.players; // always return a list of players
        };
        // Game board 3D Awesome Turbo Ninja Stuff
        this.renderer = new THREE.WebGLRenderer(); // Gameboard 3D renderer (Using ThreeJS)
        this.renderer.setSize(this.$.width(), this.$.height()); // Render is same size as DOM object container
        this.scene = new THREE.Scene();            // Gameboard 3D scene
        this.lights = {
            ambientLight:new THREE.AmbientLight(0x111111),
            sunLight:(function () {
                var pointLight = new THREE.PointLight(0xFFFFFF);
                pointLight.position.x = 100;
                pointLight.position.y = 0;
                pointLight.position.z = 150;
                return pointLight;
            }())
        };
        this.camera = new THREE.PerspectiveCamera(// Gameboard camera & properties
            90, // View angle
            Self.$.width() / Self.$.height(), // Aspect
            0.10, // Near
            10000   // Far
        );
        this.camera.position.z = 400;
        for (var light in this.lights) {
            this.scene.add(this.lights[light]); // Add lights
        }
        this.scene.add(this.camera);              // Add Camera to the scene
        this.renderer.render( // Action!
            this.scene,
            this.camera
        );
        this.$.append(this.renderer.domElement);    // Add 3D renderer to the DOM
        this.start = function(){
            // TODO: What other things need to happen to the game board at the start of game?
            G.activeGameboards.push(Self);  // Add the game board to the active game boards list
            Self.renderer.render(           // renders the scene
                Self.scene,
                Self.camera
            );
            G.client.emit('new_game',{}); // Let the server know a new game has started
            return Self;
        };
        this.refresh = function () {      // Re-render default scene and camera whenever called
            Self.renderer.render(
                Self.scene,
                Self.camera
            );
            return Self;
        };
        return Self;
    };
=======


>>>>>>> Tweaking

    $(function () {
        G.client.on('connect', function () {
            G.client.emit('new_player_joined',{}); // TODO: What should happen when a new player has joined?
        });
    });

    return G;
}(Game || {}, jQuery, THREE));