'use strict';
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    let isMinus = false;
    let hasMark = false;
    let result = [];
    root:
        for (let i in str) {
            let char = str.charAt(i);
            switch (char) {
                case '9' :
                case '8' :
                case '7' :
                case '6' :
                case '5' :
                case '4' :
                case '3' :
                case '2' :
                case '1' :
                case '0' :
                    result.push(char);
                    break;
                case ' ':
                    if (result.length === 0) {
                        break;
                    } else {
                        break root;
                    }
                case '+':
                    if (result.length === 0 && !hasMark) {
                        hasMark = true;
                        break;
                    } else {
                        break root;
                    }
                case '-':
                    if (result.length === 0 && !hasMark) {
                        isMinus = true;
                        hasMark = true;
                        break;
                    } else {
                        break root;
                    }
                default:
                    break root;
            }
        }
    console.log(result)
    let i = result.length - 1;
    let ret = 0;
    let time = 1;
    while (i >= 0) {
        let char = result[i];
        switch (char) {
            case '9' :
                ret += time * 9;
                break;
            case '8' :
                ret += time * 8;
                break;
            case '7' :
                ret += time * 7;
                break;
            case '6' :
                ret += time * 6;
                break;
            case '5' :
                ret += time * 5;
                break;
            case '4' :
                ret += time * 4;
                break;
            case '3' :
                ret += time * 3;
                break;
            case '2' :
                ret += time * 2;
                break;
            case '1' :
                ret += time * 1;
                break;
            case '0' :
                break;
        }
        time = 10 * time;
        i--;
    }

    console.log(ret);
    ret = Math.min(2147483647,ret);
    return isMinus ? -ret : ret;
};

console.log(myAtoi("123"));