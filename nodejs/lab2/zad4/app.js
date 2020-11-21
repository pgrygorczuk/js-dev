
const _ = require('lodash');

const someArray = [3, 5, -20, -1002, 234, 542, 6, 23, -3, 8];

console.log(
    'min:', _.min(someArray),
    'max:', _.max(someArray)
);

