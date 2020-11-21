
function uniq( array1, array2 )
{
    let retval = [];
    array.forEach( (value, index, array) => {
        if( !retval.includes(value) )
        {
            retval.push( value );
        }
    } );
    return retval;
}

// tworzymy nową funkcję do porownania 2 tablic
// wejściowe parametry są tablicami
function diff(a, b) {
    // deklarujemy zmienną tablicową w której zwrócimy różnicę jakie występują między tablicą 'a' i 'b'
    const result = [];

    // iterujemy po każdym elemencie tablicy 'a'
    a.forEach(function (element) {
        // sprawdzamy czy w tablicy 'b' znajduje się 'element' z tablicy 'a'
        if (b.indexOf(element) === -1) {
            // jeżeli tablica 'b' nie zawiera elementu z tablicy 'a', dodajemy element do tablicy wynikowej
            result.push(element);
        }
    });

    // zwracamy nową tablicę zawierającą różnicę między tablicami
    return result;
}

module.exports = {
    uniq: uniq,
    diff: diff,
}
