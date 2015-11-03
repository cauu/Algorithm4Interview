/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var str = n.toString(2);
    while(str.length<32) {
        str = '0'+str;
    }
    var result = '';
    for(var i = str.length-1;i>=0;i--) {
        result+=str[i];
    }
    return parseInt(result,2);
};
