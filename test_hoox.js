var Hoox = require('hoox');
//var tape = require('tape');

//take an innocent function
function plus (a, b) {
  return a + b
}

//and add hooks to it.
plus = Hoox(plus)

//now you can control input and output
plus.hook(function (fn, args) {
  var value = fn.apply(null, args.map(Math.round))
  return Math.max(value, 0)
})

console.log(plus(1,3))
// 4

console.log(plus(0.8, -5))
// 0

console.log(plus(0.9, 0.9))
// 2




function hello (name) {
  return 'Hello, '+name+'.'
}

function post(fn, args) {
  var s = fn.apply(this, args)
  return s.replace('.', '!!!')
}


function pre (fn, args) {
  return fn(args[0].toUpperCase())
}

//hello = Hoox(hello).hook(pre).hook(post)
console.log(hello('foo'))
console.log(Hoox(hello).hook(post)('foo'))
console.log(Hoox(hello).hook(pre)('foo'))
console.log(Hoox(hello).hook(pre).hook(post)('foo'))


//

function async (n, cb) {
  cb(null, n + 1)
}

function double (fn, args) {
  return fn(args[0]*2, args[1])
}

Hoox(async)
(1, function(_, v) {
  console.log(v)
})

Hoox(async).hook(double)
(1, function(_, v) {
  console.log(v)
})

