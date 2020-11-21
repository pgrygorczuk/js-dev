// 2) Create four function definitions. One for every basic math operations and taking two input parameters.
// Create one more function. This function is to return calculation object.
// This object is to have parameters object field that holds two operation parameters inside (x and y)
// and a function field that points to a function with math operation (defined at the beginning).
// A function setOperation() that sets the field from previous sentence and a calculate() function
// that makes calculation and returns its value.

function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mul(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

function getResult(a, b)
{
    return {
        params: {x: a, y: b},
        operation: add,
        setOperation: function(op){
            this.operation = op;
        },
        calculate: function(){
            return this.operation(this.params.x, this.params.y);
        }
    };
}

let result = getResult(1, 2);
result.setOperation( sub );
console.log( result.calculate() );

result.setOperation( div );
console.log( result.calculate() );
