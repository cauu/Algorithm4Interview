/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(!n) {
        return false;
    }
    var n2 = n.toString(2);
    for(var i = n2.length-1;i>0;i--) {
        if(n2[i]==='1') {
            return false;
        }
    }
    return true;
};
