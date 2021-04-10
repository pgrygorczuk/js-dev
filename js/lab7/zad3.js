// Given two strings, write a program that efficiently finds the longest common subsequence. ‘karol rolki’ -> rol
'use strict';

function findLongestCommonSubsequence(s1, s2){

    let len = Array(s1.length+1).fill().map(
        () => Array(s2.length+1).fill(0) );

    for(let i=0; i<=s1.length; ++i){
        for(let j=0; j<=s2.length; ++j){

            if( i==0 || j==0 ){
                len[i][j] = 0;
                continue;
            }
            
            if( s1[i-1] === s2[j-1] ){
                len[i][j] = len[i-1][j-1] + 1;
            }
            else{
                len[i][j] = Math.max( len[i-1][j], len[i][j-1] );
            }
        }
    }

    let index = len[s1.length][s2.length]; // LCS length
    let sequence = []; // Sequence found.

    for(let i=s1.length, j=s2.length; i > 0 && j > 0; ){

        if( s1[i-1] == s2[j-1] ){
            sequence[index-1] = s1[i-1];
            --index;
            --i;
            --j;
        }
        else if( len[i-1][j] > len[i][j-1] ){
            --i;
        }
        else{
            --j;
        }

    }

    return sequence.join('');
}


console.log( findLongestCommonSubsequence('ala', 'alarm') );
console.log( findLongestCommonSubsequence('kwiatek', 'wiata') );
console.log( findLongestCommonSubsequence('kiwi', 'wiatr') );
console.log( findLongestCommonSubsequence('karol', 'rolki') );
