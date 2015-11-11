/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length<=1) {
        return nums.length;
    }
    var lastNum = nums[0];
    for(var i = 1;i<nums.length;i++) {
        if(nums[i] === lastNum) {
            nums.splice(i, 1);
            i--;
        }
        else {
            lastNum = nums[i];
        }
    }
    return nums.length;
}

function _splice(arr, from, n) {
    if(from >= arr.length || n === 0) {
        return arr;
    }
    if(from+n > arr.length) {
        return arr.slice(0, from);
    }
    var end;
    for(var i = from, j = from+n;;i++,j++) {
        if(j >= arr.length) {
             break;
        }
        else {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;   
        }
    }
    return arr.slice(0, -n);
}
