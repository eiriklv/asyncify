var asyncify = require('./lib');

var doSomeSyncStuff1 = function(a) {
  return a;
};

var doSomeSyncStuff2 = function(a, b) {
  return a + b;
};

var doSomeSyncStuff3 = function(a, b, c) {
  return a + b + c;
};

exports['asyncify'] = {
  'should take a function and return a function': function(test) {
    test.expect(3);

    var doSomeAsyncStuff1 = asyncify(doSomeSyncStuff1);
    var doSomeAsyncStuff2 = asyncify(doSomeSyncStuff2);
    var doSomeAsyncStuff3 = asyncify(doSomeSyncStuff3);

    test.ok(typeof doSomeAsyncStuff1 === 'function', 'should return a function');
    test.ok(typeof doSomeAsyncStuff2 === 'function', 'should return a function');
    test.ok(typeof doSomeAsyncStuff3 === 'function', 'should return a function');
    
    test.done();
  },

  'should produce the same result as the sync version, only async (arity 1)': function(test) {
    test.expect(1);

    var doSomeAsyncStuff1 = asyncify(doSomeSyncStuff1);

    doSomeAsyncStuff1(1, function(err, result) {
      test.strictEqual(result, doSomeSyncStuff1(1), 'should produce the same result');
      test.done();
    });
  },

  'should produce the same result as the sync version, only async (arity 2)': function(test) {
    test.expect(1);

    var doSomeAsyncStuff2 = asyncify(doSomeSyncStuff2);

    doSomeAsyncStuff2(1, 2, function(err, result) {
      test.strictEqual(result, doSomeSyncStuff2(1, 2), 'should produce the same result');
      test.done();
    });
  },

  'should produce the same result as the sync version, only async (arity 3)': function(test) {
    test.expect(1);

    var doSomeAsyncStuff3 = asyncify(doSomeSyncStuff3);

    doSomeAsyncStuff3(1, 2, 3, function(err, result) {
      test.strictEqual(result, doSomeSyncStuff3(1, 2, 3), 'should produce the same result');
      test.done();
    });
  }

}
