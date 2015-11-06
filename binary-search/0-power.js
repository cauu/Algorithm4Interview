/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n === 0) {
        return 1;
    }
    var p = n>0?n:-n;
    var result;

    if(p%2==0) {
        var half = myPow(x, p/2);
        result = half*half;
    }
    else{
        var half = myPow(x, (p-1)/2);
        result = half*half*x;
    }
    return n>0?result:1/result;
};
