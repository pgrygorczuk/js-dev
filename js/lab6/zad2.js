// Guessing number game.

class GuessNumber
{
    constructor(mode='binary')
    {
        this.min = 0;
        this.max = 100;
        this.mode = mode;
        this.myNumber = this.getRandomInt(this.min, this.max);
    }

    getNumber()
    {
        return this.myNumber;
    }

    getRandomInt(min, max)
    {
        return min + Math.floor((max - min) * Math.random());
    }

    guess(lastResult='?')
    {
        if(lastResult === '<')
            this.max = this.myNumber - 1;
        else if(lastResult === '>')
            this.min = this.myNumber + 1;

        if(this.mode === 'binary')
            this.myNumber = Math.floor( (this.min + this.max) / 2);
        else
            this.myNumber = this.getRandomInt(this.min, this.max);
        return this.myNumber;
    }

    getResult(number)
    {
        if(this.myNumber < number)
            return '<';
        if(this.myNumber > number)
            return '>';
        return '=';
    }
}


let player1 = new GuessNumber('binary'); // Będzie zgadywał.
let player2 = new GuessNumber();         // Będzie wymyślał liczbę. 
let number, result='?', iterations=0;


while(result !== '=')
{
    ++iterations;
    number = player1.guess(result);
    console.log(`Player 1: I guess the number is ${number}.`);
    result = player2.getResult(number);
    console.log(`Player 2: My number is ${result} your number.`);
}

console.log(`Iterations: ${iterations}.`);
