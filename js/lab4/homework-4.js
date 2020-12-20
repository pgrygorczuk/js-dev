// Create a solution that will tell us what poker set we have.
// The solution is to deal us 5 cards from the standard 52 card deck.
// After that the solution is to tell us what is the best poker set.

const COLORS = ['♠', '♡', '♣', '♢'];
const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

Array.prototype.random = function()
{
    return this[Math.floor((Math.random()*this.length))];
}

class Card
{
    constructor(color, value)
    {
        if( color )
            this.color = color;
        else
            this.color = COLORS.random();
        if( value )
            this.value = value;
        else
            this.value = VALUES.random();
    }
    toString()
    {
        let value = this.value;
        if( value == 11) value = 'J';
        else if(value == 12) value = 'Q';
        else if(value == 13) value = 'K';
        else if(value == 14) value = 'A';
        return '{ ' + this.color + ' ' + value + ' }';
    }
    equals(card)
    {
        return  this.color == card.color &&
                this.value == card.value;
    }
    compare(card)
    {
        return this.value - card.value;
    }
}


class Poker
{
    constructor(cards) //5 Cards
    {
        let card;
        this.cards = [];
        if( cards )
            this.cards = cards;
        while( this.cards.length < 5 )
        {
            card = new Card();
            if( !this.cards.some( (item) => item.equals(card) ) )
                this.cards.push( card );
        }
        this.cards.sort( (a, b) => a.compare(b) )
    }
    sameColor()
    {
        let color;
        // this.cards.forEach( function(item){
        //     if( color == undefined )
        //         color = item.color;
        //     if( color != item.color )
        //         return false;
        // } ); // RETURN PROBLEM
        for(let item of this.cards)
        {
            if( color == undefined ) //first run
                color = item.color;
            if( color != item.color )
                return false;
        }
        return true;
    }
    sameValues()
    {
        let counts = [], prev, count = 1;
        this.cards.forEach( function(item)
        {
            if( prev == item.value )
                count += 1;
            else if( prev != undefined ) // not first run
            {
                counts.push( count );
                count = 1;
            }
            prev = item.value
        } );
        // Push last count.
        counts.push( count );
        //console.log(counts);
        return counts;
    }
    showCards()
    {
        let items = [];
        this.cards.forEach( (item) => items.push( item.toString() ) );
        console.log(...items);
    }
    identifySetup()
    {
        let counts = this.sameValues(),
            maxSameValues = Math.max( ...counts ),
            minSameValues = Math.min( ...counts ),
            sameColor_ = this.sameColor();
        if( sameColor_ )
        {
            let sum = 0;
            this.cards.forEach( item => sum += item.value );
            if( sum == 10+11+12+13+14 )
                return 'poker królewski';
            if( this.cards[ this.cards.length-1 ].value - this.cards[0].value == 4 )
                return 'poker';
            return 'kolor';
        }
        if( maxSameValues == 4 )
            return 'kareta';
        if( maxSameValues == 3 && minSameValues == 2 )
            return 'full';
        if( maxSameValues < 2 && (
            this.cards[ this.cards.length-1 ].value - this.cards[0].value == 4 || // 2, 3, 4, 5, 6
            this.cards[0] == 2 && this.cards[1] == 3 && this.cards[2] == 4 && this.cards[3] == 5 && this.cards[4] == 14 ))
            return 'strit';
        if( maxSameValues == 3 )
            return 'trójka';
        if( maxSameValues == 2 )
        {
            if( counts.length == 3 ) //[2, 2, 1]
                return 'dwie pary';
            else
                return 'pair';
        }
        return 'wysoka karta';
    }
}

// ===

let poker = new Poker([
    new Card(color = '♠', value = 14),
    new Card(color = '♠', value = 13),
    new Card(color = '♠', value = 12),
    new Card(color = '♠', value = 11),
    new Card(color = '♠', value = 10),
]);
poker.showCards();
console.log( poker.identifySetup() );

poker = new Poker([
    new Card(color = '♠', value = 11),
    new Card(color = '♠', value = 10),
    new Card(color = '♠', value = 9),
    new Card(color = '♠', value = 8),
    new Card(color = '♠', value = 7),
]);
poker.showCards();
console.log( poker.identifySetup() );

poker = new Poker([
    new Card(color = '♡', value = 9),
    new Card(color = '♠', value = 9),
    new Card(color = '♣', value = 9),
    new Card(color = '♢', value = 9),
    new Card(color = '♢', value = 3),
]);
poker.showCards();
console.log( poker.identifySetup() );

poker = new Poker([
    new Card(color = '♢', value = 6),
    new Card(color = '♠', value = 6),
    new Card(color = '♡', value = 6),
    new Card(color = '♣', value = 3),
    new Card(color = '♠', value = 3),
]);
poker.showCards();
console.log( poker.identifySetup() );

poker = new Poker([
    new Card(color = '♡', value = 2),
    new Card(color = '♡', value = 7),
    new Card(color = '♡', value = 11),
    new Card(color = '♡', value = 14),
    new Card(color = '♡', value = 4),
]);
poker.showCards();
console.log( poker.identifySetup() );

poker = new Poker([
    new Card(color = '♢', value = 3),
    new Card(color = '♣', value = 4),
    new Card(color = '♢', value = 5),
    new Card(color = '♠', value = 6),
    new Card(color = '♡', value = 7),
]);
poker.showCards();
console.log( poker.identifySetup() );

poker = new Poker([
    new Card(color = '♡', value = 8),
    new Card(color = '♠', value = 8),
    new Card(color = '♣', value = 8),
    new Card(color = '♣', value = 2),
    new Card(color = '♢', value = 10),
]);
poker.showCards();
console.log( poker.identifySetup() );

poker = new Poker([
    new Card(color = '♢', value = 12),
    new Card(color = '♠', value = 12),
    new Card(color = '♡', value = 5),
    new Card(color = '♣', value = 2),
    new Card(color = '♠', value = 5),
]);
poker.showCards();
console.log( poker.identifySetup() );

poker = new Poker([
    new Card(color = '♣', value = 13),
    new Card(color = '♢', value = 13),
    new Card(color = '♣', value = 7),
    new Card(color = '♠', value = 2),
    new Card(color = '♡', value = 11),
]);
poker.showCards();
console.log( poker.identifySetup() );

// === random
poker = new Poker();
poker.showCards();
console.log( poker.identifySetup() );

//'♠', '♡', '♣', '♢'