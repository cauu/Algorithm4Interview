/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s === "" && t === "") {
        return true;
    }
    if(s.length != t.length) {
        return false;
    }
    //key: s,value: t 
    var hash_s = {};
    //key: t, value: t
    var hash_t = {};
    for(var i in s) {
        if(!hash_s[s[i]]) {
            hash_s[s[i]] = t[i];
        }
        else if(hash_s[s[i]]!=t[i]) {
            return false;
        }
        if(!hash_t[t[i]]) {
            hash_t[t[i]] = s[i];
        }
        else if(hash_t[t[i]] != s[i]) {
            return false;
        }
    }

    return true;
};
