exports.login = function (clients, client) {
    // TODO: Login services (if any)
}

// Tools
function makeSafe(text) {
    // TODO: Security featuers
    try {
        return String(text).replace(/<(?:.|\n)*?>/gm, '');
    } catch (err) {
        console.log(err);
        return '';
    }
}
