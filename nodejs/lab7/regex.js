const inputOk = "15-000"; // kod pocztowy
const inputNotOk = "12000";
//11-111
//if(input[0] - czy jest liczba)
//...

//let regex = new RegExp("\\d\\d-\\d\\d\\d");
let regex = new RegExp(/\d{2}-\d{3}/);

function check(input){
    console.log(input + " " + regex.test(input));
}

check("15-000");
check("12000");
check("1-0000");

regex = new RegExp(/(\+?48)?\d{9}/);

check("+48123456789");
check("+481234567890");

const text = "Bardzo długi text z jakimis wyr aza mi. Cośtam asd ";

regex = new RegExp(/\s[a-z]{3}\s/g); // Przelacznik g - wyszukanie wszystkich dopasowan
regex = new RegExp(/[a-z]{3}/g);

console.log(text.match(regex));
