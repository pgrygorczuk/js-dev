
class Sudoku
{
    constructor(board)
    {
        this.orygBoard = board;
        this.board = [...board];
    }
    showBoard()
    {
        let row, col;
        for( row=0; row<this.board.length; row+=1 )
        {
            console.log( this.board[row].toString() );
        }
        console.log('');
    }
    solve( row=0, col=0 )
    {
        let nextRow = row, nextCol=col+1;
        if( nextCol > 8 )
        {
            nextCol = 0;
            nextRow = row+1;
        }
        if( nextRow > 8 )
            return true;

        if( this.orygBoard[row][col] == 0 )
        {
            for( let i=1; i<=9; i+=1 )
            {
                if( this.isMovePossible(row, col, i) )
                {
                    this.board[row][col] = i; //make move
                    if( this.solve(nextRow, nextCol) )
                        return true;
                }
            }
            this.board[row][col] = 0; //undo move
            return false;
        }
        
        return this.solve(nextRow, nextCol);
    }
    isSolved()
    {
        return (
            this.board[0].indexOf( 0 ) == -1 &&
            this.board[1].indexOf( 0 ) == -1 &&
            this.board[2].indexOf( 0 ) == -1 &&
            this.board[3].indexOf( 0 ) == -1 &&
            this.board[4].indexOf( 0 ) == -1 &&
            this.board[5].indexOf( 0 ) == -1 &&
            this.board[6].indexOf( 0 ) == -1 &&
            this.board[7].indexOf( 0 ) == -1 &&
            this.board[8].indexOf( 0 ) == -1 );
    }
    isMovePossible(row, col, num)
    {
        let x = Math.floor( row/3 )*3, // row/3*3 + i%3
            y = Math.floor( col/3 )*3; // col/3*3 + i/3
        for( let i=0; i<9; i+=1)
        {
            if( this.board[row][i] == num || this.board[i][col] == num ||
                this.board[ x+i%3 ][ y+Math.floor(i/3) ] == num )
                return false;
        }
        return true;
    }
}

let example_1 = [
    [ 7, 0, 4, 8, 0, 0, 3, 0, 1 ],
    [ 8, 2, 0, 5, 0, 0, 0, 4, 0 ],
    [ 0, 0, 9, 4, 3, 0, 5, 0, 0 ],
    [ 3, 1, 0, 0, 0, 0, 8, 0, 7 ],
    [ 0, 8, 0, 0, 0, 0, 0, 1, 0 ],
    [ 9, 0, 7, 0, 0, 0, 0, 3, 2 ],
    [ 0, 0, 6, 0, 1, 5, 4, 0, 0 ],
    [ 0, 7, 0, 0, 0, 9, 0, 6, 5 ],
    [ 5, 0, 8, 0, 0, 2, 1, 0, 3 ],
];

let example_2 = [
    [ 7, 5, 4, 8, 2, 6, 3, 9, 1 ],
    [ 8, 2, 3, 5, 9, 1, 7, 4, 6 ],
    [ 1, 6, 9, 4, 3, 7, 5, 2, 8 ],
    [ 3, 1, 2, 9, 6, 4, 8, 5, 7 ],
    [ 6, 8, 5, 2, 7, 3, 9, 1, 4 ],
    [ 9, 4, 7, 1, 5, 8, 6, 3, 2 ],
    [ 2, 3, 6, 7, 1, 5, 4, 8, 9 ],
    [ 4, 7, 1, 3, 8, 9, 2, 6, 5 ],
    [ 5, 0, 8, 0, 0, 2, 1, 0, 3 ],
];

let example_3 = [
    [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
];

let sudoku = new Sudoku(example_1);

sudoku.showBoard();
sudoku.solve();
console.log( 'Solved: ' + sudoku.isSolved());
sudoku.showBoard();
