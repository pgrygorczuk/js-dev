// Write a program that automatically converts English text to Morse code and vice versa.

class MorseCode{
    letterToCode = {
        a: '.-', b: '-...', c: '-.-.', d: '-..', e: '.', f: '..-.',
        g: '--.', h: '....', i: '..', j: '.---', k: '-.-', l: '.-..',
        m: '--', n: '-.', o: '---', p: '.--.', q: '--.-', r: '.-.',
        s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-',
        y: '-.--', z: '--..', 1: '.----', 2: '..---', 3: '...--', 4: '....-',
        5: '.....', 6: '-....', 7: '--...', 8: '---..', 9: '----.', 0: '-----',
    };
    codeToLetter = {
        '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f',
        '--.': 'g', '....': 'h', '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l',
        '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r',
        '...': 's', '-': 't', '.----': 1, '..---': 2, '...--': 3, '....-': 4,
        '.....': 5, '-....': 6, '--...': 7, '---..': 8, '----.': 9, '-----': 0,
    };
    translateText(text){
        let result = "";
        for(let i in text){
            result += this.letterToCode[i] + ' ';
        }
        return result;
    }
    translateCode(code){
        let result = "";
        for(let i in text){
            result += this.codeToLetter[i] + ' ';
        }
        return result;
    }
}

let mc = new MorseCode();
mc.translateText();
