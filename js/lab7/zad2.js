// Write a program that finds the longest palindromic substring of a given string.
'use strict';

String.prototype.findPalindrom = function(){

    const isPalindrom = (text) => {
        if(text.length < 3)
            return false;
        text = text.toLowerCase();
        const lastIndex = Math.floor( text.length/2.0 ); // Finds the middle.
        for(let i=0; i<=lastIndex; ++i){
            if(text[i] !== text[text.length-1-i])
                return false;
        }
        return true;
    };
    
    // len = max dlugosc palindromu
    for(let len=this.length; len>2; --len){
        for(let begin=0; begin+len<=this.length; ++begin){
            const part = this.substring(begin, len);
            if( isPalindrom( part ) ){
                return part;
            }
        }
    }
    return '';
};

console.log( 'Example 1: katamaran -> ' + ('katamaran'.findPalindrom()) );
console.log( 'Example 2: kajak -> ' + ('kajak'.findPalindrom()) );
console.log( 'Example 3: abecadło -> ' + ('abecadło'.findPalindrom()) );
console.log( 'Example 4: Anna -> ' + ('Anna'.findPalindrom()) );
