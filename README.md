## Quickstart: Make a game, add a player
### 1. Make a new game space using a [Module Pattern](http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth)
```javascript
/*
*	The global "Game" becomes "G" inside the game space.
*	You should always return "G" (or whatever you call it) at
*	the end of your game space so that your script can be
*	loaded in any order.
*/

var Game = (function (G) {

    // Your game code goes in here

    return G;
}(Game || {});
```

### 2. Add game dependencies
```javascript
/*
*	The "jQuery" global becomes "$", but "THREE" stays
*	the same. Flexability kicks ass.
*/

var Game = (function (G, $, THREE) { // plugins passed here...

    // code here

    return G;
}(Game || {}, jQuery, THREE)); // ...from here

```
### 3. Make a game board
```javascript
/*
*	Here we make a new game board whose id is 'myNewGame'
*	An object named "option" is passed that can contain
*	important game board starting condition information.
*	(this could be anything from the ID, the dimensions,
*	or even the maximum number of players allowed playing.)
*
*	Although the game has been instanciated, it doesn't actually
*	render anything until you call the "start()" method.  Once called
*	the game will then render it's graphics.
*/

var Game = (function (G, $, THREE) {

    var options = {
        id:'myNewGame'
    }

    var myGame = new G.GameBoard(options);
    myGame.start();
    return G;
}(Game || {}, jQuery, THREE));
```
### 4. Add a player
```javascript
/*
*	Here we make a new player with the name 'Matt' and add
*	this player to the game board with the id 'myNewGame'.
*	The options are passed directly that contain important
* 	player starting condition information. A callback is run
*	after the player is added to the game.
*	At the moment, you need to be sure to refresh the game
*	view after loading a new player. this is TEMPORARY and
*	the board will automatically do so when a player is
*	added.
*/

var Game = (function (G, $, THREE) {

    var options = {
        id:'myNewGame'
    }

    var myGame = new G.GameBoard(options);
    myGame.start();

    var player1 = new G.Player({
        name: 'Matt',
        gameId: 'myNewGame',
        callback: function(player){
            // Optional callback that positions the player at some new X,Y coordinate.
            // For now, you will need to manually refresh the scene if you do this.
            player.geometry.position.x = -100;
            player.geometry.position.y = 100;
            player.game.refresh();
        }
    });
    return G;
}(Game || {}, jQuery, THREE));
```
 ----
# WTFs
## The *Game* global
```javascript
var Game = (function(G, $, THREE){
    // Comments coming here... (3/12/2013)
}(Game || {}, jQuery, THREE));
```


## *Game.GameBoard*
#### G.GameBoard()
```javascript
var Game = (function(G, $, THREE){
    G.GameBoard(); // Comments coming here... (3/12/2013)
}(Game || {}, jQuery, THREE));
```
#### G.GameBoard(options)
```javascript
var Game = (function(G, $, THREE){
    G.GameBoard({
       // Comments coming here... (3/12/2013) 
    });
}(Game || {}, jQuery, THREE));
```


## *Game.Player*
#### G.Player()
```javascript
var Game = (function(G, $, THREE){
    G.Player(); // Comments coming here... (3/12/2013)
}(Game || {}, jQuery, THREE));
```
#### G.Player(options)
```javascript
var Game = (function(G, $, THREE){
    G.Player({
       // Comments coming here... (3/12/2013) 
    });
}(Game || {}, jQuery, THREE));
