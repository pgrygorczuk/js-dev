// Example 1
const myModule = (function(){

    let privateVariable = 'Hello world!';

    function privateMethod(){
        console.log(privateVariable);
    }

    return {
        publicMethod: function(){
            privateMethod();
        }
    }

})();

myModule.publicMethod();

// Example 2
const singleton = (function(){
    let instance;
    function init(){
        return {
            name: "Peter",
            age: 24,
        };
    }
    if(!instance){
        instance = init();
    }
    return instance;
})();

// Example 3
const singleton = (function(){
    let instance;
    function init(){
        return new Person();
    }
    class Person{}
    return {
        getInstance: function(){
            if(!instance){
                instance = init();
            }
            return instance;
        }
    };
})();

const instance = singleton.getInstance();

// Example 4
function VehicleFactory(){

    class Vehicle{};
    class Car extends Vehicle{};
    class Truck extends Vehicle{};

    function createVehicle(options){
        // walidacja
        if(options.doors < 2) throw new Error("Are you insane?");
        // utworzenie obiektu
        if(options.vehicleType === "car"){
            return new Car();
        }
        else{
            return new Truck();
        }
    }

    return {
        createVehicle: createVehicle
    };
}

const factory = VehicleFactory();
const car = factory.createVehicle({
    vehicleType: "car",
    doors: 4,
});
console.log(typeof car);
