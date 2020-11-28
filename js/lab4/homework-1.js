String.prototype.reverse = function()
{
    return this.split('').reverse().join('');
}

let s = '123abc';
console.log( s.reverse() );
