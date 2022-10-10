/*

Usage:


API:
 getItem(key)
 setItem(key, value)
 removeItem(key)
 clear()
 key(n)
 length

*/
var ls = localStorage = require('localStorage')
p = console.log



/* localStorage */
p(null === localStorage.getItem('key'))
p(0 === localStorage.length)
p(null === localStorage.getItem("doesn't exist"))
p(undefined === localStorage["doesn't exist"])

localStorage.setItem('myItem')
p("undefined" === localStorage.getItem('myItem'))
p(1 === localStorage.length);

localStorage.setItem('myItem', 0)
p("0" === localStorage.getItem('myItem'));

localStorage.removeItem('myItem', 0)
p(0 === localStorage.length);

localStorage.clear()
p(0 === localStorage.length)



/*
 */
myValue = {
    foo: 'bar',
    baz: 'quux'
}


ls.setItem('myKey', JSON.stringify(myValue));
p(ls.getItem('myKey'))

p(ls.length)





