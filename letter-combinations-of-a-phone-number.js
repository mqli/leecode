'use strict';

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {

    let phone = [[], [], ['a', 'b', 'c'], ['d', 'e', 'f'],
        ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'],
        ['p', 'q', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']
    ];
    let matrix = [];
    for (let num of digits) {
        let i = parseInt(num);
        for (let char of phone[i]){

        }
    }
};