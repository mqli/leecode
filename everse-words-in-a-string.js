/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function (str) {
    let buffer = [];
    let res = []
    let i = 0;
    while (i < str.length) {
        let char = str.charAt(i);
        if (char === ' ') {
            if (buffer.length > 0) {
                res.unshift(buffer.join(''));
                buffer = [];
            }
        } else {
            buffer.push(char);
        }
        i++;
    }
    if (buffer.length > 0) {
        res.unshift(buffer.join(''));
    }
    return res.join(' ');
};
console.log(reverseWords(' avb  aaa'))