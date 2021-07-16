// function* randomNumberIterator(){
//     while(true){
//         yield Math.floor(Math.random()) * 100;
//     }
// }

// const iterator = randomNumberIterator();
// console.log( iterator.next() );

// 2
// function* timestampGenerator(){
//     var ts = Date.now();
//     yield ts;
//     var extratime = yield;
// }

// const iterator = timestampGenerator();
// const firstTS = iterator.next();

// console.log(firstTS);
// iterator.next();
// iterator.next(1000);

// 3
function* gen1(){
    yield 1;
    yield 2;
}

function* gen2(){
    yield* gen1();
    yield 3;
}

const iterator = gen2();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
