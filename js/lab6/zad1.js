// 1. Prime numbers.

class Eratostenes
{
    constructor()
    {
        this.primeNumbers = [2];
    }

    isPrimeNumber(n)
    {
        if(this.primeNumbers.includes(n))
            return true;

        for(let primeNumber of this.primeNumbers)
        {
            if( n < Math.sqrt(primeNumber) )
                break;
            if(n % primeNumber === 0)
                return false;
        }

        this.primeNumbers.push(n);
        return true;
    }

    getPrimeNumbers(from, to)
    {
        let result = [];
        for(let i=2; i<=to; ++i)
        {
            if( this.isPrimeNumber(i) && i>=from )
            {
                result.push(i);
            }
        }
        return result;
    }
}

eratostenes = new Eratostenes();
console.log( eratostenes.getPrimeNumbers(0, 100) );
console.log( eratostenes.getPrimeNumbers(41, 59) );
