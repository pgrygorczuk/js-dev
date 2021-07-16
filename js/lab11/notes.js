// 1
// const target = {};
// const handler = {};
// const proxy = new Proxy(target, handler);
// console.log(proxy);
// let i = 0;

// 2
// const target = {};
// const handler = {};
// const proxy = new Proxy(target, handler);
// target.prop1 = "prop1";
// proxy.prop2 = "prop2";
// console.log(proxy);
// console.log(target);
// let i = 0;

// 3
// let target = {};
// let handler = {
//     get: () => {
//         console.log("Object is being accessed."); // Nie pokaze wlasciwosci (nie ma return).
//     }
// };

// const proxy = new Proxy(target, handler);
// target.prop1 = "prop1";
// proxy.prop2 = "prop2";
// console.log(proxy.prop1);
// console.log(proxy.prop2);

// 4
// let target = {};
// let handler = {
//     get: (obj, prop) => {
//         console.log("Object is being accessed.");
//         return obj[prop];
//     },
// };
// let proxy = new Proxy(target, handler);
// target.prop1 = "prop1";
// proxy.prop2 = "prop2";
// console.log(proxy.prop1);
// console.log(proxy.prop2););
// let i = 0;

// 5
// let test = { prop1: "prop1 Value", hidden: "secret" };
// test = new Proxy(test, {
//     get: (target, property, receiver) => {
//         console.log("Accesing: ", property);
//         return target[property];
//     }
// });

// console.log(test.prop1);
// console.log(test.toString());

// 6
// let test = { prop1: "prop1 Value", hidden: "secret" };
// test = new Proxy(test, {
//     get: (target, property, receiver) => {
//         if(!target[property]){
//             throw new Error("Property not found");
//         }
//         if(property === "hidden"){ // Kontrola dostepu.
//             return "Hidden property";
//         }
//         console.log("Accesing: ", property);
//         return target[property];
//     }
// });

// console.log(test.hidden);
// console.log(test.hammer);

// 7
class BaseClass{
    constructor(id){
        this.id  = id;
        return new Proxy(this, {});
    }
}

class SpecialClass extends BaseClass{
    constructor(id, prop1, prop2){
        super(id);
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
}

console.log(new BaseClass());

