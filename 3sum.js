'use strict';
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let unique = [];
    let result = [];
    for (let num of nums) {
        let i = 0;

        while (i < unique.length && unique[i] != num) {
            i++;
        }
        if (i == unique.length ) {
            unique.push(num);
            if (unique.length >= 3) {
                for (let x = 0; x < unique.length; x++) {
                    for (let y = x + 1; y < unique.length ; y++) {
                        console.log(unique[x] , unique[y] ,num);
                        if (unique[x] + unique[y] == -num) {
                            result.push([unique[x], unique[y], num])
                        }
                    }
                }
            }
        }
    }
    return result;
};

console.log(threeSum([-1,0,1,2,-1,-4]));