var find132pattern = function(nums) {
    const length = nums.length;
    let j = length - 2;
    while (j > 0) {
        let numJ = nums[j];
        let k = nums.length - 1;
        let i = j - 1;
        while(k > j || i >= 0){
            let numK = nums[k];
            let numI = nums[i];
            if (numI < numK && numK < numJ) {
                return true;
            }
            if (k === j + 1 && i === 0){
                break;
            }
            if (k === j + 1) {
                if (numK >= numJ){
                    break;
                } 
                else {
                    i--;
                    continue;
                }
            }
            if (i === 0) {
                if (numI >= numJ){
                    break;
                } 
                else {
                    k--;
                    continue;
                }
            }
            while(numJ <= nums[k] && k > j ) {
                k--;
            }
            while(numJ <= nums[i] && i >= 0) {
                i--;
            }
            if (numJ <= nums[k] || numJ <= nums[i]){
                continue;
            } else if (nums[k] === nums[i]){
                if (k > j + 1){
                    k --;
                }else if (j > 0){
                    j--;
                }else{
                    break
                }
            }
        }
        j --;
    }
    return false;
};
console.log(find132pattern([-2,1,2,-2,1,2]));