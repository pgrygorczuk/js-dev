// Funkcja assign
let dataObject = 
{
    id: 1,
    data: "example data",
};

let proxy = (function(foo){
    return{
        getData: function(){ return foo; },
        setData: function(val){
            foo.data = val;
        }
    };
//})( dataObject );
})( Object.assign({}, dataObject) ); // Skopiowanie obiektu.

console.log( proxy.getData() );
proxy.setData( "changed data" );
console.log( proxy.data );
console.log( dataObject.data );

let obj1 = {}, obj2 = {};
let result;

result = Object.assign({}, obj1, obj2); // Naklada obj2 na obj1 itd.
result = Object.assign({x: 0}, obj1, obj2);

//
function Person(){
    console.log( this ); // Pusty obiekt typu person.
    return 1;            // Nie wykona sie przy new, bo wynikiem jest kontekst funkcji.
    // this.sayHello  = () => ... // Blad! Cialo funkcji bedzie trzymane przy kazdym obiekcie!
}

let karol = new Person();
console.log( karol );

Person.prototype.sayHello = function(){};
String.prototype.showMe = function(){
    console.log( "Hello world from " + this );
};

function Demo(){
    // Some complicated calculations.
}

Function.prototype.customRun = function(){
    let ts = new Date().getTime();
    this();
    return new Date().getTime() - ts;
};

console.log( Demo.customRun() );

// Utility functions: filter, every, some, find
