let array = [1,6,23,8,4,8,3,7];

// 1) Create a function that returns the sum of all elements passed in array as parameter.
function f1( elements )
{
    return elements.reduce( (prev, curr) => { return prev+curr; } );
}

// 2) Create a function that returns sum of first and last elements of given array.
function f2( elements )
{
    if( !elements ) return null;
    if( elements.length == 1 ) return elements[0];
    return elements[0] + elements[elements.length-1];
}

// 3) Create a function that takes a number and return factorial of that number.
function f3( n )
{
    let result = 1;
    for(let i=1; i<=n; ++i)
    {
        result *= i;
    }
    return result;
}

// 4) Create a function that returns given array in reverse order.
function f4( elements )
{
    let result = [];
    for(let i=elements.length-1; i>=0; --i)
    {
        result.push(elements[i]);
    }
    return result;
}

// 5) Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]
//    [1,3,4,1,0,3] => [4,5,3] function(array)=>array
function f5( elements )
{
    let e = elements, result = [];
    for(let i=0; i+1<elements.length; i+=2)
    {
        result.push( e[i] + e[i+1] );
    }
    return result;
}

// 6) For time of this example remove last element from the given array.
//    Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e].
function f6( elements )
{
    // TODO
    let e = elements, result = [];
    for(let i=0; i+1<elements.length; i+=2)
    {
        result.push( e[i] + e[i+1] );
    }
    
    return result;
}

// 7) Create a function the return one random element from given array.
function f7( elements )
{
    let getRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min };
    return elements[ getRandom(0, elements.length-1) ];
}

// 8) Create a function that takes two parameters: array and number off attempts.
//    Based on number of attempts choose a random number from table that many times and return lowest one.
function f8( elements, num_of_attempts )
{
    let min, rand_number;
    for(let i=0; i<num_of_attempts; ++i)
    {
        rand_number = f7(elements);
        if( min == undefined || rand_number < min )
            min = rand_number;
    }
    return min;
}

// 9) Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays.
//    This takes place as long as there are elements in source array.
function f9( elements )
{
    let numbers = [];
    let getRandomIndex = () => {};
    while( elements )
    {
        break;
    }
}

// 10) Create a function that on given array will perform operation of adding or subtracting elements.
// Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d).
function f10( elements )
{

}

// 11) Create a function that will return the current day name in Polish.
function f11( elements )
{
    let today = new Date();
}

// 12) Create a function that tells us how many days till Friday.
function f12( elements )
{

}

// 13) Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations.
function f13( a, b )
{
    return {
        sum: a+b,
        sub: a-b,
        mul: a*b,
        div: a/b,
    };
}

// console.log( f1( array ) );
// console.log( f2( array ) );
// console.log( f3( 3 ) );
// console.log( f4( array ) );
// console.log( f5( array ) );
// console.log( f6( array ) );
// console.log( f7( array ) );
console.log( f8( array, 10 ) );

