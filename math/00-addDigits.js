/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num < 10) {
        return num;
    }
    
    while(num >= 10) {
        num = _addByPos(num);
    }

    return num;
    
    function _addByPos(n) {
        var result = 0
        while(n>=10) {
            var acc = n%10;
            result += acc;
            n = Math.floor(n/10);
        }    
        return result+n;
    }
};
