/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //s为空时，为true
    if(s === "") {
        return true;
    }
    //此处可以不使用额外的储存空间result
    //想想怎么做？
    var result = "";
    for(var i in s) {
        if(isAlpha(s[i])) {
            result += s[i];
        }
    }
    result = result.toLowerCase();
    for(var i=0, j=result.length-1;i<j;i++, j--) {
        if(result[i] != result[j]) {
            return false;
        }
    }
    return true;
    
    function isAlpha(s) {
        return (s.charCodeAt()>='A'.charCodeAt()&&s.charCodeAt()<='Z'.charCodeAt())
            || (s.charCodeAt()>='a'.charCodeAt()&&s.charCodeAt()<='z'.charCodeAt())
            || (s.charCodeAt()>='0'.charCodeAt()&&s.charCodeAt()<='9'.charCodeAt());
    }
}; 
