
var R = require('ramda');

// assoc

// pick
R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}) // => {a: 1, d: 4}
R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); // => {a: 1}

// pickAll
R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}

// pickBy
var isUpperCase = (val, key) => key.toUpperCase() === key;
R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}

//pipe
var f = R.pipe(Math.pow, R.negate, R.inc);
f(3, 4);  // - (3^4) + 1

