// 1
// var val1 = "show";
// function show(param){
//     var innerParam = param;
//     console.log(param);
//     console.log(val1); // Debug: Closure
// }
// show("text");
// console.log(innerParam); // Operacja praworeczna.

// 2
//'use strict';

// function show(param){
//     innerParam = param; // Niejawne rozrzerzenie watku globalnego
//     console.log(param);
// }
// show("test");

// // 3
// function show(param){
//     'use strict'; // Dziala tylko w lokalnym scope. Po zakonczeniu funkcji nie dziala.
// }

// 4
//notCreatedVariable = 5; // Niejawne rozrzerzenie watku globalnego. Use strict zabroni takiej operacji.

// 5 Use strict nie kontroluje rozszerzania obiektow. Kontroluje rozrzerzanie watku, a nie obiektu.
// 'use strict';
// var obj = {};
// obj.a = "sdf";
// console.log(obj);

// 6
// console.log(this); // Obiekt pusty {}
// function foo(){
//     'use strict';
//     console.log(this);
// }
// foo(); // undefined
// foo.call(this);

// 7
// 'use strict';
// function foo(arg){
//     console.log(arg);
// }
// foo(global);

// 8
// var obj = {};
// Object.defineProperty(obj, 'ro', {
//     enumerable: true,
//     configurable: true,
//     writable: false,
//     value: "Original Value",
// });
// console.log(obj.ro);
// obj.ro = 'asdf'; // Silent failrue. Trzeba wlaczyc use strict, zeby wyskoczyl blad.
// console.log(obj.ro);

// 9
// for(let key in obj){
//     console.log(key);
// }

// Object.defineProperty(obj, "a", {
//     enumerable: false,
// });

// 10
// for(var key in obj){
//     console.log(key);
//     console.log(obj[key]);
// }

// 11
// var obj = { a: "A", b: "B" };
// obj.c = { c: "C", d: "D" };
// console.log(obj);
// delete obj.c; // Mozna usuwac wlasciwosci obiektow (nawet jezeli to cale obiekty), ale nie mozna usuwac zmiennych.
// console.log(obj);

// 12
// var obj = { a: "A" };
// var b = {};
// obj.b = b; // Zmienna b.
// delete obj.b; // Usunie wlasciwosc, ale nie zmienna b.

// 13
// var obj = {};
// Object.defineProperty(obj, 'ro', {
//     enumerable: true,
//     configurable: false, // Nie mozna skonfigurowac po raz drugi.
//     // Usuniecie wlasciwosci to tez rekonfiguracja.
//     writable: false,
//     value: "Original Value",
// });

// 14
// var obj = { a: 1 };
// Object.preventExtensions(obj); // Zakazuje rozszerzania obiektu.
// obj.b = 3;


