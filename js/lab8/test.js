function squared(){
    let n = 0;

    return {
        [Symbol.iterator](){
            return {
                next(){
                    ++n;
        
                    if( n<= 5){
                        return {
                            value: n*n,
                            done: false,
                        };
                    }
        
                    return {
                        value: undefined,
                        done: true,
                    };
                }
            };
        }
    }
}

let iter = squared();
//console.log(iter.next());

for(const i of iter){
    console.log(i);
}
