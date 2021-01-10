
let i = 0;

let interval = setInterval(function(){
    if( ++i >= 6 ){
        console.log("Finish.");
        clearInterval(interval);
    }else{
        console.log('Hello after ' + i + ' seconds.');
    }
}, 1000);
