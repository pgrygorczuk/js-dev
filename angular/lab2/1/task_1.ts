/**
 * ADDITIONALLY
 * Execute compiled output (task_1.js)
 * and check if it gives correct calculations result
 * command:
 * $ node task_1.js
 *
 */

let sum: number;
function add(a: number, b: number) {
    return +a + +b; //Number(a) or +a converts a to Number.
}

/**
 * Dont change anything below this line
 */
const num1: any = 1;
const num2: any = '2'
sum = add(num1, num2);
console.log(sum);
