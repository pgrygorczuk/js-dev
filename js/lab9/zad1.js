'use strict';

Array.prototype.getRandom = function(){
    return this[Math.floor((Math.random()*this.length))];
}

// ===========================================================================
class Player{
    constructor(name){
        this.name = name;
        this.memory = {};
        this.points = 0;
    }
    toString(){
        return `${this.name}: ${this.points}`;
    }
    isPairInMemory(){
        let items = {};
        for( const [key, value] of Object.entries(this.memory) ){
            if( !(value in items) ){
                items[value] = key;
            }
            else{
                // Zwraca oba indeksy.
                return [items[value], key];
            }
        }
        return false;
    }
    // Usuwa z pamieci karty odkryte przez innych graczy.
    updateMemory(board){
        for(const index in this.memory){
            if( !(index in board.board) ){
                delete this.memory[index];
            }
        }
    }
    makeMove(board){
        let keys = Object.keys(this.memory);
        let index1, index2, value1, value2;
        
        // Sprawdzamy, czy w pamieci mamy jakas pare, jesli tak, odkrywamy ja.
        const pair = this.isPairInMemory();
        if(pair){
            [index1, index2] = pair;
        }
        else{
            // Pobiera losowy indeks z ponimieciem indeksow w "keys".
            index1 = board.getRandomIndex(keys);
            // Dodajemy do kluczy, zeby pominac przy wyznaczaniu nastepnego indeksu.
            keys.push(index1);
            // Pobieramy drugi indeks (keys - indeksy pomijane przy losowaniu).
            index2 = board.getRandomIndex(keys);
        }

        console.log(`${this.name} checks ${index1} and ${index2}.`);
        [value1, value2] = board.check(index1, index2);

        this.memory[index1] = value1;
        this.memory[index2] = value2;

        if(value1 === value2){
            ++this.points;
            console.log(`${this.name} founds a pair: ${index1} -> ${value1} & ${index2} -> ${value2}`);
            // Usuwamy z pamieci odkryte karty.
            delete this.memory[index1];
            delete this.memory[index2];
            return true;
        }

        return false;
    }
}

// ===========================================================================
class Board{
    constructor(cards=5){
        this.board = {};
        const tmp = [];
        for(let i=0; i<cards; ++i){
            tmp.push(i);
            tmp.push(i);
        }
        tmp.sort( () => { return Math.random() - 0.5 } );
        this.board = { ...tmp };
    }
    toString(){
        return JSON.stringify(this.board);
    }
    getKeys(){
        return Object.keys(this.board);
    }
    getRandomIndex(exclude = []){
        const result = Object.keys(this.board)
            .filter( (value, index) => {
                return !exclude.includes(value);
            } ).getRandom();
        return result;
    }
    isEmpty(){
        return Object.keys(this.board).length === 0;
    }
    check(index1, index2){
        const
            value1 = this.board[index1],
            value2 = this.board[index2];
        if(value1===value2){
            delete this.board[index1];
            delete this.board[index2];
        }
        return [ value1, value2 ];
    }
}

// ===========================================================================

// Number of unique cards.
const CARDS_NUMBER = 10;

let board = new Board(CARDS_NUMBER);
let round = 0;
let players = [
    new Player('Player 1'), new Player('Player 2'),
    new Player('Player 3'), new Player('Player 4')
];

while( !board.isEmpty() ){
    console.log(`Cards: ${board.toString()}`);
    console.log("=> Round " + (++round));
    players.forEach( player => {
        if( board.isEmpty() ) return;
        player.updateMemory(board);
        player.makeMove(board);
    });
}

console.log("=== Final results ===");
players.forEach( player => {
    console.log(player.toString());
});
