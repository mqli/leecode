/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    'use strict';
    let x = [[],[],[],[],[],[],[],[],[]];
    let y = [[],[],[],[],[],[],[],[],[]];
    let z = [[],[],[],[],[],[],[],[],[]];
    let isValid = true;
    for (let indexX = 0; indexX < 9 && isValid; indexX++) {
        let chars = board[indexX];
        for(let indexY = 0;indexY < 9 && isValid; indexY++) {
            let char = parseInt(chars[indexY], 10);
            if (isNaN(char)) {
                continue;
            }
            let indexZ = (Math.floor(indexX / 3) * 3) + Math.floor(indexY / 3);
            console.log(y[3])
            if (x[indexX][char] === true || y[indexY][char] === true || z[indexZ][char] === true ) {
                isValid = false;
                continue;
            }
            x[indexX][char] = true;
            y[indexY][char] = true;
            z[indexZ][char] = true;
        }
    }
    return isValid;
};