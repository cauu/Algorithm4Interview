/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(!nums) {
        return false;
    }
    var hash = {};
    for(var i = 0;i<nums.length;i++) {
        if(!hash[nums[i]]) {
            hash[nums[i]] = 0;
        }
        hash[nums[i]]++;
    }
    
    for(var j in hash) {
        if(hash[j]>=2) {
            return true;
        }
    }
    return false;
};
