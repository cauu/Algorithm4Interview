/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var tmpN = n;
    var result = "";
    var codeA = 'A'.charCodeAt() - 1;
    while(tmpN > 26) {
        var code;
        if(tmpN % 26 === 0) {
            code = 26;
            tmpN = Math.floor(tmpN/26) - 1;
        }
        else {
            code = tmpN%26;
            tmpN = Math.floor(tmpN/26);
        }
        result = String.fromCharCode(code  + codeA) + result;
    }
    result = (String.fromCharCode(Math.floor(tmpN)+codeA)) + result;
    return result;
};
