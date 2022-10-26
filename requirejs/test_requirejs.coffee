
R = require 'requirejs'

R.config
        nodeRequire: require


R.define 'foo', [], ->
        console.log 'foo',arguments
        {}

R.define 'bar', [], ->
        console.log 'bar', arguments
        {}

R ['foo', 'bar'], (foo, bar) ->
        console.log foo, bar
        



R.define 'c', [],  ->
        


R.define 'skirt',
        color: 'black',
        size: 'unsize'


R.define 'skirt2', ->
        color: 'black',
        size: 'unsize'


R.define 'cart',
        name: 'cart'

R.define 'inventory', ->
        name: 'inventory'

R.define 'skirt3', ['cart', 'inventory'] ,(cart, inventory) ->
        name: cart.name + ', ' + inventory.name,
        color: 'blue',
        size: 'large'

R ['skirt3'], (skirt)->
        console.log skirt

                        
        