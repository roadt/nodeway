
requirejs.config({
                 baseUrl: 'js/lib',

                 paths: { 
                     app: '../app'
                 }
});

requirejs(['app/sub'], function(sub){
              console.log(sub)
})