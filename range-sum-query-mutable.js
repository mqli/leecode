/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let _length = nums.length
    this._nums = nums;
    this._sums = [];
    this._sums[0] = nums[0];
    for (let i = 1; i < _length; i ++){
       this._sums.push(this._sums[i - 1] + nums[i]);
    }
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    let _length = this._nums.length
    let change = val - this._nums[i]
    this._nums[i] = val;
    for (; i < _length; i ++){
       this._sums[i] += change;
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

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */