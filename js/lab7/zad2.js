// Write a program that finds the longest palindromic substring of a given string.

function isPalindrom(text){
    if(text.length < 3)
        return false;
    let lastIndex = text.length % 2 == 1? (text.length-1)/2 : text.length/2;
    for(let i=0; i<=lastIndex; ++i)
    {
        if(text[i] !== text[text.length-1-i])
            return false;
    }
    return true;
}

function palindrom(text){
    for(let i=text.length-1; i>3; ++i)
    {
        //if( isPalindrom(text.slice()) )
    }
}

console.log( isPalindrom('kajak') );
