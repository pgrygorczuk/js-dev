'use strict';
const chess = require('./chess');
const boardjs = require('./board');

const board = boardjs.board.getInstance();
const piecesFactory = chess.PiecesFactory();
const pieceTypes = ['k', 'n', 'b', 'r', 'q'];

Array.prototype.getRandom = function(){
    return this[Math.floor((Math.random()*this.length))];
}

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let x, y, piece, attacketPieces, piecesList = [];

for(let i=0; i<10; ++i){
    do{
        x = getRandom(0, 7);
        y = getRandom(0, 7);
    }while(board.isOccupied(x, y));
    piece = piecesFactory.createPiece(x, y, pieceTypes.getRandom());
    attacketPieces = piece.getAttackedPieces();
    if(attacketPieces.length > 0){
        console.log(`Piece ${piece.type} located at [${piece.x}, ${piece.y}] can reach:`);
        attacketPieces.forEach((value) => {
            [x, y] = value;
            console.log(`  ${board.squares[x][y]} at [${x}, ${y}]`);
        });
    }
}

board.print();
console.log(piecesList);
