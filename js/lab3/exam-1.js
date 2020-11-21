function EightBalls()
{
    function validate(input)
    {
        let
            err = false,
            min = Math.min(input);
        if( input.length != 8 )
            err = 'Only 8 balls are allowed.';
        return err;
    }

    function weightMachine(x1, x2)
    {
        let x1_ = x1, x2_ = x2;

        if( Array.isArray(x1) )
            x1_ = x1.reduce( (acc, curr) => {
                return { value: acc.value + curr.value };
            });

        x1_ = x1_.value;

        if( Array.isArray(x2) )
            x2_ = x2.reduce( (acc, curr) => {
                return { value: acc.value + curr.value };
            });

        x2_ = x2_.value;

        if( x1_ > x2_ ) return 0;
        if( x2_ > x1_ ) return 1;
        return 2;
    }

    function split( balls )
    {
        let index, item,
            group_1 = [], group_2 = [], group_3 = [],
            balls_data = [];

        balls.forEach( (value, index, array) => {
            balls_data.push( {
                value: value,
                index: index,
            } );
        } );

        while( balls_data.length > 0 )
        {
            // Get random index.
            index = Math.floor( Math.random()*balls_data.length );
            item  = balls_data.splice(index, 1)[0];
            // Fill up groups.
            if( group_1.length < 3 )
                group_1.push( item );
            else if ( group_2.length < 3 )
                group_2.push( item );
            else
                group_3.push( item );
        }

        return [group_1, group_2, group_3];
    }

    function solve( balls )
    {
        let group_1, group_2, group_3,
            errors = validate( balls );
        if( errors )
        {
            console.log( errors );
            return false;
        }

        [group_1, group_2, group_3] = split( balls );

        let result = weightMachine( group_1, group_2 ); // first compare
        if( result == 0 )
        {
            // compare balls from group 1
            result = weightMachine( group_1[0], group_1[1] );
            return group_1[result].index;
        }
        else if( result == 1 )
        {
            // compare balls from group 2
            result = weightMachine( group_2[0], group_2[1] );
            return group_2[result].index;
        }
        else
        {
            // compare balls from group 3
            result = weightMachine( group_3[0], group_3[1] );
            return group_3[result].index;
        }
    }

    return { solve: solve };
}

let
    eightBalls = EightBalls(),
    result = eightBalls.solve( [1, 1, 2, 1, 1, 1, 1, 1] );

console.log( `Wadliwa kula jest na indeksie: ${result}` );
