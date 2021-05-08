// 1. Wrapper.
function add(x, y){
    // Time consuming instructions.
    return x + y;
}

function showArgument(func){
    return function(x, y){
        console.log("Args: " + x + ", " + y);
        return func(x, y);
    }
}

let addWrapperInShowArguments = showArgument(add);
console.log(addWrapperInShowArguments(2, 7));

// 2. Proxy.
class Proxy{
    constructor(func1, func2){
        this.func1 = func1;
        this.func2 = func2;
    }
    getValue(arg1){
        if( arg1 >= 0){
            return this.func1(arg1);
        }
        else{
            return this.func2(arg1);
        }
    }
}

// 3. Compose.
let sum = (x, y) => x + y;
let mul = (x, y) => x * y;
let x = sum(mul(1, 2), 3);
let mulAndSum = (x, y, z) => sum(mul(x, y), z);
console.log( x, mulAndSum(1, 2, 3) );

function compose(f1, f2){
    return function fc(){
        var args = [].slice.call(arguments); // arguments - tabela z argumentami
        return f2( f1(args.shift(), args.shift()), args.shift() );
    }
}

mulAndSum = compose(mul, sum); // Niepotrzebne przypisanie do zmiennej.
mulAndSum(1, 2, 3);
x = compose(mul, sum)(1, 2, 3);

// 4. Subscriber.
// Zapisywanie sie i dostawanie informacji.
let show1 = _ => console.log("Show1");
let show2 = x => console.log("Show 2. Arg " + x);

class Subscriber{
    constructor(){
        this.observers = [];
    }
    subscribe(func){
        this.observers.push(func);
    }
    unsubscribe(func){
        this.observers = this.observers.filter(fn => fn !== func);
    }
    fire(...args){
        // Wola wszystkie subskrybujace funkcje.
        this.observers.forEach(fn => fn(...args));
    }
}

let subscriber = new Subscriber();
subscriber.subscribe(show1);
subscriber.subscribe(show2);
subscriber.subscribe(show2); // Brak ograniczenia na ilosc zapisow.
subscriber.fire("a", "b", "c");
subscriber.unsubscribe(show2);

// 5. Mediator.
// Chatroom.
class User{
    constructor(userName){
        this.userName = userName;
    }
    sendMessage(message, user){
        this.chatRoom.sendMessage(message);
    }
    receiveMessage(){
        // ...
    }
}

class ChatRoom{
    constructor(chatRoomName){
        this.chatRoomName = chatRoomName;
    }
    registerUser(user){
        if( this.users.indexOf(user) === -1 ){
            // ...
        }
    }
}

let chatRoom = new ChatRoom("Mediator Chatroom");
let user = new User('Paweł');
chatRoom.registerUser(user);
user.sendMessage('Hi');

// 6. Curry.
// 6.1.
function f(){
    let count = 0;
    return function(){
        return ++count;
    };
}

let x = f();
let y = f();

console.log("x_" + x());
console.log("x_" + x());
console.log("y_" + y());

// 6.2.
function s(x){
    return function(y){
        return x + y;
    }
}

let sumWith5 = s(5);
