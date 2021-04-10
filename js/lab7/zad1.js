// Write a program that automatically converts English text to Morse code and vice versa.
'use strict';
class MorseCode{
    letterToCode = {
        a: '.-', b: '-...', c: '-.-.', d: '-..', e: '.', f: '..-.',
        g: '--.', h: '....', i: '..', j: '.---', k: '-.-', l: '.-..',
        m: '--', n: '-.', o: '---', p: '.--.', q: '--.-', r: '.-.',
        s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-',
        y: '-.--', z: '--..', 1: '.----', 2: '..---', 3: '...--', 4: '....-',
        5: '.....', 6: '-....', 7: '--...', 8: '---..', 9: '----.', 0: '-----',
        ' ': '|',
    };
    constructor(){
        this.codeToLetter = {};
        // Odwraca tablice letterToCode.
        for(const [key, value] of Object.entries(this.letterToCode)){
            this.codeToLetter[value] = key;
        }
    }
    // Tlumaczy text na kod Morse'a.
    translateText(text){
        return text.toLowerCase().split('').map( value => {
            return this.letterToCode[value] || '?';
        }).join(' ');
    }
    // Tlumaczy kod Morse'a na tekst.
    translateCode(code){
        return code.split(' ').map( value => {
            return this.codeToLetter[value] || '?';
        }).join('');
    }
}

let morse = new MorseCode();
let code = morse.translateText('The brown fox jumpes over the lazy cat');
let text = morse.translateCode(code);
console.log(text);
console.log(code);
