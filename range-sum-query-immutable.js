/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this._sums = [];
    this._sums[0] = nums[0];
    for (let i = 1; i < nums.length; i ++){
       this._sums.push(this._sums[i - 1] + nums[i]);
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if ( i === 0) {
        return this._sums[j];
    }
    return this._sums[j] - this._sums[i - 1];
};
