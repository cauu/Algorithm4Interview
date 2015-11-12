/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    var as = s.split('').sort(),
        ts = t.split('').sort();
    for(var i = 0; i<as.length;i++) {
        if(as[i] !== ts[i]) {
            return false;
        }
    }
    return true;
};
