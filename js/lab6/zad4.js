// Print n Fibonacci numbers.

function fibo(n)
{
    return n<3 ? 1: fibo(n-1) + fibo(n-2);
}

function getFiboArray(size)
{
    let result;
    if(size < 1) return [];
    if(size < 2) return [1];
    if(size < 3) return [1, 1];
    result = getFiboArray(size-1);
    result.push( result[result.length-2] + result[result.length-1] );
    return result;
}

console.log( fibo(5) );
console.log( getFiboArray(5) );
