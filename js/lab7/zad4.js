class Matrix{
    constructor(...params)
    {
        if(params.length == 1){
            this.values = params[0];
        }
        else{
            let dimX = params[0],
                dimY = params[1];
            this.values = [];
            let row = [];
            for(let i=0; i<dimX; ++i){
                row.push( 0 );
            }
            for(let i=0; i<dimY; ++i){
                this.values.push( row );
            }
        }
    }
    mul(matrix){
        let result = new Matrix(3, 3);
        // C[i][j] = A[i][0]*B[0][j] + A[i][1]*B[1][j] + ... + A[i][n]*B[n][j]
        for(let i=0; i<this.values.length; ++i){
            for(let j=0; j<this.values[i].length; ++j){
                for(let k=0; k<matrix.values[0].length; ++k){
                    result.values[i][j] += this.values[i][k] * matrix.values[k][j];
                }
            }
        }
        return result;
    }
    toString(){
        let result = "";
        for(let i=0; i<this.values.length; ++i){
            for(let j=0; j<this.values[i].length; ++j){
                result += this.values[i][j] + ', ';
            }
            result = result.substr(0, result.length-2) + "\n";
        }
        return result;
    }
}

let
m1 = new Matrix([
    [2, 4, 1],
    [2, 3, 9],
    [3, 1, 8],
]),
m2 = new Matrix([
    [1, 2, 3],
    [3, 6, 1],
    [2, 4, 7],
]);
m3 = new Matrix(3, 4);

console.log( m1.toString() );
console.log( m2.toString() );
console.log( m1.mul(m2).toString() );
