exports.newPlayer = function (clients, client) {
    // TODO: Do something when a new player has joined
};

// Tools
function makeSafe(text) {
    // TODO: Security features
    try {
        return String(text).replace(/<(?:.|\n)*?>/gm, '');
    } catch (err) {
        console.log(err);
        return '';
    }
}
