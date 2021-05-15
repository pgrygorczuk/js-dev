let x = 1;
x++;
console.log(x);

const y = 1;
//y++; //error
console.log(y);

const z = [1, 2]; // risky
z[0] = 3;
z.length = 0; // Memory cleared.
z.length = 2; // Data lost.
console.log(z);

// Solution.
'use strict';
const zz = Object.freeze([1, 2]);

const w = Object.freeze(zz);
console.log(zz);
console.log(w);

// We decide when to freeze object.
