Asyncify (asfy)
===================

[![Build Status](https://travis-ci.org/eiriklv/asyncify.svg?branch=master)](https://travis-ci.org/eiriklv/asyncify)
[![npm version](https://badge.fury.io/js/asfy.svg)](http://badge.fury.io/js/asfy)
[![Dependency Status](https://david-dm.org/eiriklv/asyncify.svg)](https://david-dm.org/eiriklv/asyncify)
[![devDependency Status](https://david-dm.org/eiriklv/asyncify/dev-status.svg)](https://david-dm.org/eiriklv/asyncify#info=devDependencies)

### Introduction:
Turn a sync function async


### Example:

```js
var sum = function(a, b) {
  return a + b;
};

var result = sum(5, 5); // 10
```

turns into

```js
var asfy = require('asfy');

var sum = function(a, b) {
  return a + b;
};

var asyncSum = asfy(sum);

asyncSum(5, 5, function(err, result) {
  console.log(result); // 10
})
```
