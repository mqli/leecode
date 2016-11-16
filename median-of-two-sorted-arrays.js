/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    'use strict';
    let i_1 = 0;
    let i_2 = 0;
    let counter = 0;

    let len_1 = nums1.length;
    let len_2 = nums2.length;
    let max_len = len_1 + len_2;

    let is_even = max_len % 2 == 0;
    let mid = is_even ? (max_len / 2 + 1) : (max_len + 1) / 2;

    let is_nums_1_end = false;
    let is_nums_2_end = false;


    let buffer = [];

    while (counter < mid) {
        let n_1 = nums1[i_1];
        let n_2 = nums2[i_2];

        if (i_1 == len_1) {
            is_nums_1_end = true;
        }
        if (i_2 == len_2) {
            is_nums_2_end = true;
        }

        if (!is_nums_1_end && !is_nums_2_end) {
            if (n_1 > n_2) {
                buffer.push(n_2);
                i_2++;
            } else if (n_1 < n_2) {
                buffer.push(n_1);
                i_1++;
            } else if (n_1 = n_2) {
                buffer.push(n_1);
                i_1++;
            }
        } else if (is_nums_1_end) {
            buffer.push(n_2);
            i_2++;
        } else {
            buffer.push(n_1);
            i_1++;
        }

        counter++;

    }
    return is_even ? ((buffer[mid-1] + buffer[mid-2]) / 2) : (buffer[mid-1]);

};
