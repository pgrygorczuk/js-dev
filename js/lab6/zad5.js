function getDigits(input)
{
    let result = [];
    for(let i of input)
    {
        if( !isNaN(Number(i)) ) // (Number(i) !== NaN) nie działa ?!
            result.push(i);
    }
    return result;
}

console.log( getDigits('a123b') );
