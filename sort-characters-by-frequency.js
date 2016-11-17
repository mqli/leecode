'use strict';
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let buffer = [];
    let counter = [];
    let result = [];
    for (let i = 0 , len = s.length; i < len; i++) {
        let char = s.charAt(i);
        let match = false;
        for (let j = 0, len = buffer.length; j < len; j++) {
            if (buffer[j] == char) {
                match = true;
                counter[j]++;
                let count = counter[j];

                let k = j - 1;
                while (k >= 0 && count > counter[k]) {
                    k--;
                }

                counter[j] = counter[k + 1];
                counter[k + 1] = count;

                buffer[j] = buffer[k + 1];
                buffer[k + 1] = char;

                continue;
            }

        }
        if (!match) {
            buffer.push(char);
            counter.push(1);
        }

    }
    for (let i = 0; i < buffer.length; i++) {
        let char = buffer[i];
        for (let j = 0; j < counter[i]; j++) {
            result.push(char);
        }
    }
    return result.join('');
};

console.log(frequencySort('tree'));