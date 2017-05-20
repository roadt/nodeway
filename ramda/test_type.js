
var R = require('ramda');
var p = console.log;

// is
R.is(Object, {}); // => true
R.is(Number, 1); // => true
R.is(Object, 1); // => false
R.is(String, 's'); // => true
R.is(String, new String('')); //=>true
R.is(Object, new String('')); //=>true
R.is(Object, 's'); // => false
R.is(Number, {}); // => false

//isArrayLike
//* → Boolean
//Tests whether or not an object is similar to an array.
R.isArrayLike([]); //=> true
R.isArrayLike(true); //=> false
R.isArrayLike({}); //=> false
R.isArrayLike({length: 10}); //=> false
R.isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true


//propIs
//Type → String → Object → Boolean
//Returns true if the specified object property is of the given type; false otherwise.
R.propIs(Number, 'x', {x:1, y: 2}); //=> true
R.propIs(Number, 'x', {x: 'foo'}); //=> false
R.propIs(Number, 'x', {}); // => false

//type
//(* → {*}) → String
//Gives a single-word string description of the (native) type of a value, returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not attempt to distinguish user Object types any further, reporting them all as 'Object'.
p('-- type (* → {*}) → String --');
p(R.type({}));
p(R.type(1));
p(R.type(false));
p(R.type('s'));
p(R.type(null));
p(R.type([]));
p(R.type(/[A-z]/));

