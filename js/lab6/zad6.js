function translate(input, reversed=false)
{
    let words = input.split(' '),
        result = '';

    const interpunctionEnding = (word) => {
        const lastCh = word[word.length-1];
        if( word.length > 0 && (
            lastCh === ',' || lastCh === '.' || lastCh === ';' ))
            return lastCh;
        else
            return false;
    };

    for(let word of words)
    {
        const ie = interpunctionEnding(word);
        const isUpper = word[0].toUpperCase() === word[0];
        word = word.replace(',', '').replace('.', '').replace(';', '');
        word = word.toLowerCase();

        if(reversed)
        {
            word = word[word.length-3] + word.substring(0, word.length-3);
        }
        else
        {
            word = (word + word[0]).substring(1) + 'ay';   
        }

        if(isUpper) // Replaces first lettr to big one.
            word = word[0].toUpperCase() + word.slice(1);
        if(ie) // Adds interpunction character (if any) at the end.
            word += ie;
        result += word + ' ';
    }

    return result.substring(0, result.length-1);
}


let text = 'The quick brown fox, jumpes over the lazy cat.';
let pigLatin = translate( text );
console.log( 'Original text  : ' + text );
console.log( 'Translated     : ' + pigLatin );
console.log( 'Translated back: ' + translate(pigLatin, reversed=true) );
