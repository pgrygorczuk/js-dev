'use strict';
const board = require('./board');

const rookVectors   = [[-1,  0], [ 0, -1], [1,  0], [ 0,  1]];
const bishopVectors = [[-1, -1], [ 1, -1], [1,  1], [-1,  1]];
const knightVectors = [[-2, -1], [-1, -2], [1, -2], [ 2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1]];

function PiecesFactory(){

    class ChessPiece{
        constructor(x, y, vectors=[], range=Infinity){
            this.board = board.board.getInstance();
            this.x = x;
            this.y = y;
            this.range = range; // Piece's movement range.
            this.vectors = vectors; // Movement directions.
        }
        getAttackedPiece(vector){
            // Sprawdza kierunek zgodnie z wektorem.
            let [vx, vy] = vector, nextX, nextY;
            for(let i=1; i<=this.range; ++i){
                nextX = this.x + i*vx;
                nextY = this.y + i*vy;
                if(this.board.isOffBoard(nextX, nextY)){
                    return null;
                }
                if(this.board.isOccupied(nextX, nextY)){
                    return [nextX, nextY];
                }
            }
            return null;
        }
        getAttackedPieces(){
            let pieces = [], piece;
            for( let vector of this.vectors ){
                piece = this.getAttackedPiece(vector);
                if(piece){
                    pieces.push(piece);
                }
            }
            return pieces;
        }
    }

    class King extends ChessPiece{
        constructor(x, y){
            super(x, y, bishopVectors.concat(rookVectors), 1);
            this.board.putPiece(x, y, 'k');
            this.type = 'k';
        }
    }

    class Knight extends ChessPiece{
        constructor(x, y){
            super(x, y, knightVectors, 1);
            this.board.putPiece(x, y, 'n');
            this.type = 'n';
        }
    }

    class Bishop extends ChessPiece{
        constructor(x, y){
            super(x, y, bishopVectors);
            this.board.putPiece(x, y, 'b');
            this.type = 'b';
        }
    }

    class Rook extends ChessPiece{
        constructor(x, y){
            super(x, y, rookVectors);
            this.board.putPiece(x, y, 'r');
            this.type = 'r';
        }
    }

    class Queen extends ChessPiece{
        constructor(x, y){
            super(x, y, bishopVectors.concat(rookVectors));
            this.board.putPiece(x, y, 'q');
            this.type = 'q';
        }
    }

    function createPiece(x, y, type){
        switch(type){
            case 'k': return new King(x, y);
            case 'n': return new Knight(x, y);
            case 'b': return new Bishop(x, y);
            case 'r': return new Rook(x, y);
            case 'q': return new Queen(x, y);
            default : return new Error('Unrecognized piece type '+type);
        }
    }

    return {
        createPiece: createPiece,
    };
} // End of Pieces Factory


module.exports = {
    PiecesFactory: PiecesFactory,
};
