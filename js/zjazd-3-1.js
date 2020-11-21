// rest parameters
function showData(a, b, ...c)
{
    console.log(c);
}

showData( 1, 2, 3, 4, 5, 6 );
showData( 1 ); // b = undefined, c = [] (empty array)

//destructing array
let ids = [1, 2, 3],
    [id1, id2, id3] = ids,
    [id_, ...remainingIds] = ids;

[,, ...remainingIds] = ids; // przewijanie

console.log( id1, id2, id3 );
console.log( remainingIds );

//destructing object
let person = {
    id: 1,
    name: "Karol",
};

let {id, name} = person; // nazwy pol musza sie zgadzac

//spread
let values = [1, 2, 3];
showData(...values); // zamien tabele na liste argumentow

//iife
let iife = (function() {
    let var1 = "inner";
    function get_value(){ return var1; };
    function set_value( _var1 ){ var1 = _var1; }
    return { get_value, set_value };
})(); // iife jest tym co zwraca funkcja

iife.set_value( 1 );
iife.get_value();

//this
function ex1(){ console.log(this); }
ex1.call( { id:1 } ); // podmiana kontekstu funkcji

let contextObj = { id: 2 };
let obj = {
    id: 1,
    get_id: function(par1, par2)
    {
        return par1 + this.id + par2;
    }
};

obj.get_id.apply( contextObj, ["1", "2"]);
obj.get_id.call( contextObj, "1", "2" );

let newf = obj.get_id.bind( contextObj ); // robi kopie funkcji przypisujac obiekt jako kokntekst
let new1 = obj.get_id.bind( contextObj, "bp" ); // przypisuje parametr na sztywno

console.log( new1("bs") ); // teraz zadziala z jednym parametrem, bo pierwszy zostal zbindowany


