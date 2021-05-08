'use strict';
// ===================================================================================================================
// Skopiowane z:
// https://stackoverflow.com/questions/424292/seedable-javascript-random-number-generator
// ===================================================================================================================
function RNG(seed){
    // LCG using GCC's constants
    this.m = 0x80000000; // 2**31;
    this.a = 1103515245;
    this.c = 12345;
    this.state = seed ? seed : Math.floor(Math.random() * (this.m - 1));
}
RNG.prototype.nextInt = function(){
    this.state = (this.a * this.state + this.c) % this.m;
    return this.state;
}
RNG.prototype.nextFloat = function(){
    // returns in range [0,1]
    return this.nextInt() / (this.m - 1);
}
RNG.prototype.nextRange = function(start, end){
    // returns in range [start, end): including start, excluding end
    // can't modulu nextInt because of weak randomness in lower bits
    var rangeSize = end - start;
    var randomUnder1 = this.nextInt() / this.m;
    return start + Math.floor(randomUnder1 * rangeSize);
}
RNG.prototype.choice = function(array) {
    return array[this.nextRange(0, array.length)];
}

// ===================================================================================================================
class GameOfLife{

    constructor(width, height, cellSize=4, randomCells=1 ){

        let rng;
        this.width = width;
        this.height = height;
        this.cellSize = cellSize;
        this.randomCells = randomCells;

        const w = Math.floor( width/this.cellSize ) + 2;
        const h = Math.floor( height/this.cellSize ) + 2;

        this.cells = Array(w).fill().map(
            () => Array(h).fill( 0 ) );

        this.nextCells = Array(w).fill().map(
                () => Array(h).fill( 0 ) );

        for(let i=1; i<=w-2; ++i){
            for(let j=1; j<=h-2; ++j){
                rng = new RNG( i*j + new Date().getTime() % 10000 );
                this.cells[i][j] = rng.choice([0, 1]);
            }
        }
    }

    __getRandom(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    countNeighbours(x, y){
        return (
            this.cells[x-1][y-1] + this.cells[ x ][y-1] +
            this.cells[x+1][y-1] + this.cells[x-1][ y ] +
            this.cells[x+1][ y ] + this.cells[x-1][y+1] +
            this.cells[ x ][y+1] + this.cells[x+1][y+1] );
    }

    update(x, y){
        const nsCount = this.countNeighbours(x, y);

        // Each cell with one or no neighbors dies, as if by solitude.
        // Each cell with four or more neighbors dies, as if by overpopulation.
        this.nextCells[x][y] = 0;

        // Each cell with two or three neighbors survives.
        if( nsCount === 2 ){
            this.nextCells[x][y] = this.cells[x][y];
        }

        // Each cell with three neighbors becomes populated.
        else if( nsCount === 3 ){
            this.nextCells[x][y] = 1;
        }
    }

    tick(){
        let i, j;
        // Crate nextCells array.
        for(i=1; i<=this.cells.length-2; ++i){
            for(j=1; j<=this.cells[i].length-2; ++j){
                this.update(i, j);
            }
        }
        // Copy nextCells to cells.
        for(i=1; i<=this.cells.length-2; ++i){
            for(j=1; j<=this.cells[i].length-2; ++j){
                this.cells[i][j] = this.nextCells[i][j];
            }
        }
        // Optionally add random cells.
        for(i=0; i<this.randomCells; ++i){
            this.cells[
                this.__getRandom(1, this.cells.length-2)    ][
                this.__getRandom(1, this.cells[0].length-2) ] = 1;
        }
    }

    draw(context){
        for(let i=1; i<=this.cells.length-2; ++i){
            for(let j=1; j<=this.cells[i].length-2; ++j){

                if( this.cells[i][j] == 1 ){
                    context.fillStyle = "black";
                }
                else{
                    context.fillStyle = "white";
                }

                context.fillRect(
                    (i-1)*this.cellSize,
                    (j-1)*this.cellSize,
                    this.cellSize,
                    this.cellSize );
            }
        }
    }

}

//module.exports.GameOfLife = GameOfLife;
