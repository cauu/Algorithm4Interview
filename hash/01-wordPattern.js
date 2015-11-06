/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var hp = hash(pattern);
    var hs = hash(str.split(' '));
    
    var ap = hashToArr(hp);
    var as = hashToArr(hs);
    
    if(ap.length != as.length) {
        return false;
    }
    for(var i in as) {
        if(ap.indexOf(as[i]) == -1) {
            return false;
        }
    }
    
    return true;
    
    function hash(str) {
        var dic = {};
        for(var i = 0;i<str.length;i++) {
            if(!dic[str[i]]) {
                dic[str[i]] = [];
            }
            dic[str[i]].push(i);
        }
        return dic;
    }
    
    function hashToArr(h) {
        var arr = [];
        for(var i in h) {
            if(h[i] instanceof Array ) {
                h[i].sort(function(a,b){ return a-b });
                arr.push(h[i].toString());
            }
        }
        return arr;
    }
    
};
