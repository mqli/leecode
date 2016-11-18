/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    var LEN = height.length;
    var i = LEN - 1;
    var max = 0;
    var max_h = 0;
    // var max_w = 0;
    while (i > 0) {
        var h_i = height[i];
        if (i == LEN - 1 || h_i > height[i + 1]) {
            var j = i - 1;
            while (j >= 0) {
                var h_j = height[j];
                var w = i - j;
                var h = h_i < h_j ? h_i : h_j;
                var area = w * h;
                if (area > max) {
                    max_h = h;
                    // max_w = w;
                    max = area;
                }


                // }

                // console.log(max, i, j)
                j--;
            }
        }
        i--;
    }
    return max;
};

var result = maxArea(input);

console.log(result, Date.now() - _start);
