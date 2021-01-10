
let i = 0;

let interval = setInterval(function(){
    if( ++i >= 3 ){
        clearInterval(interval);
    }else{
        console.log('Hello after ' + i*4 + ' seconds.');
    }
}, 4000);
