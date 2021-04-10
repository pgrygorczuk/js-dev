'use strict';

class Matrix{

    constructor(...params)
    {
        if(params.length == 1){
            this.values = params[0];
        }
        else{
            this.values = Array(params[0]).fill().map(
                    () => Array(params[1]).fill(0) );
        }
    }

    mul(matrix){
        //Pierwsza macierz musi miec tyle kolumn, co druga wierszy.
        if( this.values[0].length != matrix.values.length ){
            throw 'Incompatible size of matrices!';
        }
        // this -> n x m
        //matrix -> m x p
        const
            n = this.values.length,
            m = this.values[0].length,
            p = matrix.values[0].length;

        // Definition: https://pl.wikipedia.org/wiki/Mno%C5%BCenie_macierzy
        let result = new Matrix(n, p);
        // C[i][j] = A[i][0]*B[0][j] + A[i][1]*B[1][j] + ... + A[i][m]*B[m][j]
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
]),
m3 = new Matrix([
    [ 2,  1,  3],
    [-1,  4,  0],
]),
m4 = new Matrix([
    [ 1,  3,  2],
    [-2,  0,  1],
    [ 5, -3,  2],
]);

console.log( m1.toString() );
console.log( m2.toString() );
console.log( m1.mul(m2).toString() );
console.log( m3.mul(m4).toString() );
