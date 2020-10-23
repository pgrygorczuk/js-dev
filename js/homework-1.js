
// 1)	From years in array check for leap years [1974, 1900, 1985, 2000]
let a1 = [1974, 1900, 1985, 2000], leap_years = [];
for(let i=0; i<a1.length; ++i)
{
    if( a1[i]%4 == 0 && a1[i]%100 != 0 || a1[i]%400 == 0 )
        leap_years.push( a1[i] );
}
console.log("Ex.1.: Leap years:", leap_years);

// 2)	Calculate factorial of 7.
let f7 = 1;
for(let i=1; i<=7; ++i)
{
    f7 *= i;
}
console.log("Ex.2: ", f7);

// 3)	Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]
let a2 = [1,6,23,8,4,98,3,7,3,98,4,98], sum = 0;
for(let i=0; i<a2.length; ++i)
{
    if( a2[i] % 2 == 1 ) sum += a2[i];
}
console.log("Ex.3:", sum);

// 4)	Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.
let a3 = [1,6,23,8,4,98,3,7,3,98,4,98], min=a3[0], max=a3[0];
for(let i=0; i<a3.length; ++i)
{
    if( a3[i] < min ) min = a3[i];
    if( a3[i] > max ) max = a3[i];
}
console.log("Ex.4: min =", min, ", max =", max);

// 5)	Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’]. 
let a4 = ['Karol', 'Adam','Rogowski','Politechnika','Super','Weekend'], longest_str = a4[0];
for(let i=0; i<a4.length; ++i)
{
    if( a4[i].length > longest_str.length ) longest_str = a4[i];
}
console.log("Ex.5: ", longest_str, longest_str.length);

// 6)	Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]
let a5 = [1,6,23,8,4,98,3,7,3,98,4,98], indices = [];
max = a5[0];
for(let i=0; i<a5.length; ++i)
{
    if( a5[i] < max ) continue;
    if( a5[i] == max ) indices.push( i );
    else
    {
        max = a5[i];
        indices = [ i ];
    }
}
console.log("Ex.6: There are following indices", indices, "of", max);

// 7)	Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]
let a6 = [1,6,23,8,4,98,3,7,3,98,4,98];
sum = 0;
for(let i=0; i<a6.length; ++i)
{
    sum += a6[i];
}
console.log("Ex.7: avg =", sum/a6.length);

// 8)	Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]
let a7 = [1,6,23,8,4,98,3,7,3,98,4,98];
sum = 0, cnt = 0;
for(let i=0; i<a7.length; ++i)
{
    if( i > 0 && i % 2 == 0 )
    {
        sum += a6[i];
        cnt += 1;
    }
}
console.log("Ex.8: avg =", sum/cnt);

// 9)	With a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]
let a8 = [1,6,23,8,4,98,3,7,3,98,4,98];
sum = 0, cnt = 0;
for(let i=0; i<a8.length; ++i)
{
    a8[i] % 2 ? sum -= a8[i] : sum += a8[i];
}
console.log("Ex.9: sum =", sum);
