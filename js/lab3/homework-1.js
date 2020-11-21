// Create an iffe that returns an object with fields: function setValue(),
// function showValue() and function reverseValue().
// Calling functions either logs the value or reverse it in an object.
// If value was not provided yet or is empty showValue function is to return information about that.
// Value can be type string or number. reverseValue():  If number do (*(-1)), if string reverse it.
//  Closure pattern.

// Immediately Invoked Function Expression
let some_value = (function()
{
    let value;

    function setValue( value_ )
    {
        value = value_;
    }

    function showValue()
    {
        if(value)
            console.log( `Value is ${value}` );
        else
            console.log( 'Value is not provided.' );
    }

    function reverseString( str )
    {
        let splitted = str.split('');
        return splitted.reverse().join('');
    }

    function reverseValue()
    {
        if( typeof value == "string" )
            value = reverseString( value );
        else
            value = value*(-1);
    }

    return {
        setValue,
        showValue,
        reverseValue,
    }
})();

some_value.showValue();
some_value.setValue( 5 );
some_value.showValue();
some_value.reverseValue();
some_value.showValue();
some_value.setValue( 'Paweł' );
some_value.reverseValue();
some_value.showValue();
