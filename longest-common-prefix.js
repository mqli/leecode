'use strict';
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = [];
    let len = strs.length;

    let counter = 0;
    root_loop:
        while(len > 0){
            let i = 0;
            let char = null;
            while(i < len){
                let str = strs[i];
                if (i == 0 && str.length > counter){
                    char = str.charAt(counter);
                }
                if (str.length == counter || str.charAt(counter) != char) {
                    break root_loop;
                }
                i++;
            }
            result.push(char);
            counter ++;
        }

    return result.join('');
};