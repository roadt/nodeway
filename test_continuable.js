var fs = require('fs');
var p = console.log;

var readFile = function (uri) {
    return function (cb) {
        fs.readFile(uri, cb)
    }
}
 

function map(s, f) {
  return function continuable(cb) {
    s(function (err, value) {
      cb(err, err ? null : f(value))
     })
  }
} 

var asString = map(readFile("/tmp/b.json"), String);
var asJSON = map(asString, function (x) { return JSON.parse(x) });
 
asJSON(function (err, value) {
  console.log(arguments);
})




//continuable
var continuable = require('continuable');
var readFile2 = continuable.to(fs.readFile);

var asString = map(readFile2("/tmp/b.json", 'utf-8'), String);
var asJSON = map(asString, function (x) { return JSON.parse(x) });


asJSON(function (err, value) {
  console.log(arguments);
})

//

//mapAsync
var written = continuable.mapAsync(asJSON, function (json, cb) {
    fs.writeFile("/tmp/c.json", JSON.stringify(json), cb)
})

written(function (err, writeResult) {
    /* stuff */
  console.log(arguments);
})


//join
join = continuable.join
p ('join')
var write = map(asJSON, function(json) {
  return function (cb) {
    fs.writeFile("/tmp/d.json", JSON.stringify(json), cb);
  }
})
write(p)

//both
both = continuable.both
var fileOrNull = function(uri) {
  var source = fs.readFile.bind(null, uri)
  var maybeFile  = both(source)
  
  return continuable.map(maybeFile, function (err, t) {
    if(t[0]) return null
    return t[1]
  })
}
fileOrNull('/tmp/b.json')(p)

//of(value)
of = continuable.of
p(of('xxx'))



//chain(continuable, lambda)
///chain := (Continuable<A>, (A) => Continuable<B>) => Continuable<B>
chain = continuable.chain


//either(continuable, left, right?)`
/*
either := (source: Continuable<A>,
           left: (Error, cb: Callback<B>) => Continuable<B>,
          right?: (A) => Continuable<B>)
    => Continuable<B>
*/
var fs = require("fs")
var either = require("continuable/either")

var fileStat = fs.stat.bind(null, "./package.json")
var fileExists = either(fileStat, function left(err) {
    return fs.writeFile.bind(null, "./package.json", "{}")
}) // note the right function is optional

var file = chain(fileExists, function () {
    return fs.readFile.bind(null, "./package.json")
})

file(function (err, body) {
    // There is no error because we create an empty file if the
    // stat failed. Body is either body or {}
})





