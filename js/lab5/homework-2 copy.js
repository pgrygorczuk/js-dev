
class Sudoku
{
    constructor(board)
    {
        this.board = board;
        this.rows = [];
        this.cols = [];
        this.boxes = [];
        this.sums = [];
        this.posib = [];
        for( let i=0; i<9; i+=1 )
        {
            this.sums[i] = this.board[i].reduce( (a, b) => a + b );
            this.rows.push( new Set(this.board[i]) );
            this.cols.push( new Set([
                this.board[0][i], this.board[1][i], this.board[2][i],
                this.board[3][i], this.board[4][i], this.board[5][i],
                this.board[6][i], this.board[7][i], this.board[8][i],
            ]) );
            this.boxes.push( new Set() );
        }
        let row, col;
        for( row = 0; row < 9; row += 1 )
        for( col = 0; col < 9; col += 1 )
        {
            this.boxes[ this.boxIndex(row, col) ].add( this.board[row][col] );
        }

        for( row = 0; row < 9; row += 1 )
        {
            this.posib[row] = [];
            for( col = 0; col < 9; col += 1 )
            {
                this.posib[row][col] = this.getPosib(row, col);
            }
        }
    }
    getPosib(row, col)
    {
        let result = new Set();
        if( this.board[row][col] != 0 )
            return result;
        for(let i=1; i<=9; i+=1)
        {
            if( this.isMovePossible(row, col, i) )
                result.add( i );
        }
        return result;
    }
    updatePosib(row, col, num)
    {
        //
    }
    boxIndex(row, col)
    {
        return Math.floor(col/3) + Math.floor(row/3)*3;
    }
    solve()
    {
        let moves = this.generateMoves();
        if( moves.length == 0 )
        {
            return this.isSolved();
        }

        for( let move of moves )
        {
            this.makeMove( ...move );
            if( this.solve() )
                return true;
            //this.showBoard();
            this.undoMove( ...move );
        }

        return false;
    }
    showBoard()
    {
        let row, col;
        //console.log( '+' );
        for( row=0; row<this.board.length; row+=1 )
        {
            console.log( this.board[row].toString() );
        }
        console.log('');
    }
    isMovePossible(row, col, num)
    {
        return (
            !this.rows[ row ].has(num) &&
            !this.cols[ col ].has(num) &&
            !this.boxes[ this.boxIndex(row, col) ].has(num) );
    }
    generateMoves()
    {
        let row, col, moves = [];
        for( row = 0; row < 9; row += 1 )
        {
            for( col = 0; col < 9; col += 1 )
            {
                this.posib[row][col].forEach( i => {
                    if( this.isMovePossible(row, col, i) )
                        moves.push([ row, col, i ]);
                } );
                // if( this.board[row][col] == 0 )
                // {
                //     for( let i=1; i<=9; i+=1 )
                //         if( this.isMovePossible(row, col, i) )
                //             moves.push([ row, col, i ]);
                // }
            }
        }
        return moves;
    }
    makeMove( row, col, num )
    {
        this.board[ row ][ col ] = num;
        this.rows[ row ].add( num );
        this.cols[ col ].add( num );
        this.boxes[ this.boxIndex(row, col) ].add( num );
        this.sums[row] += num;
    }
    undoMove( row, col, num )
    {
        this.board[ row ][ col ] = 0;
        this.rows[ row ].delete( num );
        this.cols[ col ].delete( num );
        this.boxes[ this.boxIndex(row, col) ].delete( num );
        this.sums[row] -= num;
    }
    isUniqueNoZero( items )
    {
        //return items.filter( (v, i, a) => a.indexOf(v) == i ); // returns unique array;
        let set = new Set(items);
        return set.size == items.length && !set.has(0);
    }
    isSolved()
    {
        return (
            this.sums[0] == 45 &&
            this.sums[1] == 45 &&
            this.sums[2] == 45 &&
            this.sums[3] == 45 &&
            this.sums[4] == 45 &&
            this.sums[5] == 45 &&
            this.sums[6] == 45 &&
            this.sums[7] == 45 &&
            this.sums[8] == 45 );
    //     return (
    //         this.board[0].indexOf( 0 ) == -1 &&
    //         this.board[1].indexOf( 0 ) == -1 &&
    //         this.board[2].indexOf( 0 ) == -1 &&
    //         this.board[3].indexOf( 0 ) == -1 &&
    //         this.board[4].indexOf( 0 ) == -1 &&
    //         this.board[5].indexOf( 0 ) == -1 &&
    //         this.board[6].indexOf( 0 ) == -1 &&
    //         this.board[7].indexOf( 0 ) == -1 &&
    //         this.board[8].indexOf( 0 ) == -1 );
    //
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

let sudoku = new Sudoku(example_2);

sudoku.showBoard();
//sudoku.makeMove( [0, 1, 1] );
//console.log(sudoku.isSolved());
sudoku.solve();
console.log(sudoku.isSolved());
sudoku.showBoard();
