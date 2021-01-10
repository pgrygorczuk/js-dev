
let i = 0, delay = 1;

let interval = setInterval(function(){
    if( ++i >= delay )
    {
        console.log('Hello World ' + delay);
        delay += 1;
        i = 0;
    }
}, 1000);
