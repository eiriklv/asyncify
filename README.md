Asyncify (asfy)
===================

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
