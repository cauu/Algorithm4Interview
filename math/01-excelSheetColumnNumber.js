/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    if(!s) {
        return 0;
    }
    var result = _getCode(s[0]);
    for(var i = 1;i<s.length;i++) {
        result = result*26 + _getCode(s[i]);
    }
    return result;
    
    function _getCode(ch) {
        return ch.charCodeAt() - 'A'.charCodeAt() + 1;
    }
};
