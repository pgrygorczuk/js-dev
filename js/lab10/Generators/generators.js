function *generator(){
    yield;
    yield "two";
    return "three";
}

for(let f of generator()){
    console.log(f);
}

// undefined
// two
