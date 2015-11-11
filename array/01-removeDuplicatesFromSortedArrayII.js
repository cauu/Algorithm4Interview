/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length <= 2) {
        return nums.length;
    }
    var counter = 1,
        dupCounter = 1,
        lastNum = nums[0];
    for(var i = 1;i< nums.length;i++) {
        if(nums[i] === lastNum) {
            if(--dupCounter<0) {
                nums.splice(i,1);
                i--;
                continue;
            }
            else {
                counter++;
            }
        }
        else {
            counter++;
            lastNum = nums[i];
            dupCounter = 1;
        }
    }
    return counter;
};
