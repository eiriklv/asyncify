var asap = (function() {
  if (setImmediate) return setImmediate;
  if (process && process.nextTick) return process.nextTick;
  return setTimeout;
}());

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

    asap(callback.bind(this, error, res));
  };
};
