
function uniq( array )
{
    let retval = [];
    array.forEach( (value, index, array) => {
        if( !retval.includes(value) )
        {
            retval.push( value );
        }
    } );
    return retval;
}

module.exports = {
    uniq: uniq,
}
