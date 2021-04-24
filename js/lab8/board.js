'use strict';

const board = (function(){
    let instance;

    function getInstance(){
        if( !instance ){
            instance = new Board();
        }
        return instance;
    }

    class Board{
        constructor(rows=8, cols=8){
            this.squares = Array(rows).fill().map(
                () => Array(cols).fill(0) );
        }

        print(){
            let row = "";
            for(let i=0; i<this.squares.length; ++i){
                for(let j=0; j<this.squares.length; ++j){
                    row += ' '+this.squares[i][j].toString()+' ';
                }
                row += "\n";
            }
            console.log(row);
        }

        putPiece(x, y, type){
            this.squares[x][y] = type;
        }

        isOccupied(x, y){
            return this.squares[x][y] !== 0;
        }

        isOffBoard(x, y){
            return this.squares[x] === undefined || this.squares[x][y] === undefined;
        }
    }

    return {
        getInstance: getInstance
    };
})();

module.exports = {
    board: board,
};
