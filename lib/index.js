var asap = require('asap');

exports = module.exports = function(fn) {
    return function() {
        var error, res;
        var args = Array.prototype.slice.call(arguments);
        var callback = args.pop();

        try {
            res = fn.apply(this, args);
        } catch (e) {
            error = e;
        }

        asap(callback.bind(this, res));
    };
};
