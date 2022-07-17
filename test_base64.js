
console.log("ase64-js");

var m = require("base64-js");
var p  = console.log;

//console.log(new ByteArray(1,2,3));
var arr = new Uint8Array(32);
for (var i = 0 ; i< 32; i++) {
	arr[0] = 'a' + i;
}

arr = [1,2,3,4,4,5,4]

s = m.fromByteArray(arr);
p(s)
p(m.byteLength(s));
p(m.toByteArray(s));

