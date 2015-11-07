/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x == 0) {
        return true;
    }
    if(x<0) {
        return false;
    }
    var head = 0;
    var temp = x;
    while(temp >= 1) {
        temp = Math.floor(temp/10);
        head++;
    } 
    head--;
    for(var tail=0, tailVal = x, headVal = x;tail<head;head--,tail++) {
        if(Math.floor(headVal/Math.pow(10, head)) != tailVal%10) {
            return false;
        }
        tailVal = Math.floor(tailVal/10);
        headVal = Math.floor(headVal%Math.pow(10,head));
    }
    return true;
};
