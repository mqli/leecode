'use strict';


/*
 '.' Matches any single character.
 '*' Matches zero or more of the preceding element.

 The matching should cover the entire input string (not partial).

 The function prototype should be:
 bool isMatch(const char *s, const char *p)

 Some examples:
 isMatch("aa","a") → false
 isMatch("aa","aa") → true
 isMatch("aaa","aa") → false
 isMatch("aa", "a*") → true
 isMatch("aa", ".*") → true
 isMatch("ab", ".*") → true
 isMatch("aab", "c*a*b") → true
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let i_s = 0;
    let i_p = 0;
    outter:
        while (i_s < s.length && i_p < p.length) {
            let c_p = p.charAt(i_p);
            let c_s = s.charAt(i_s);

            let c_p_next = i_p === p.length - 1 ? null : p.charAt(i_p + 1);
            if (c_p_next === '*') {
                if (c_p === '.') { // xx .*
                    if (i_p == p.length - 2) { //end with .*
                        return true;
                    }
                    let c_p_next_next = p.charAt(i_p + 2);
                    while (i_s < s.length) {
                        i_s++;
                        if (s.charAt(i_s) === c_p_next_next) {
                            i_p += 2;
                            break outter;
                        }
                    }
                    return false;
                } else {
                    let _i_s = i_s;
                    while (c_s === c_p) { // a*
                        i_s++;
                    }
                    if (_i_s == i_s) {
                        return false;
                    }
                    i_p = i_p + 2;
                }
            } else if (c_p === '.') {// a , *
                i_s++;
                i_p++;
            } else if (c_p === c_s) {// a , a
                i_s++;
                i_p++;
            } else { //a , b
                return false;
            }

        }
    return i_p === p.length - 1 && i_s === s.length - 1;
};

console.log( isMatch("aab", "c*a*b"));