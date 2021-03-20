//Rotates array by k.

Array.prototype.swap = function(index1, index2)
{
    let tmp = this[index1];
    this[index1] = this[index2];
    this[index2] = tmp;
}

Array.prototype.rotate = function(k)
{
    for(let j=0; j<k; ++j)
    {
        for(let i=0; i<this.length-1; ++i)
        {
            this.swap(i, i+1);
        }
    }
}


let exampleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log( exampleArray );
exampleArray.rotate(2);
console.log( exampleArray );
