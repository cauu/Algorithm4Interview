/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    if(!version1 || !version2) {
        return 0;
    }
    var v1a = version1.split('.'),
        v2a = version2.split('.');
    var v1h = !v1a[0]?0:parseInt(v1a[0]),
        v2h = !v2a[0]?0:parseInt(v2a[0]);
        
    if(v1h > v2h) {
        return 1;
    }
    else if(v1h === v2h) {
        var result = 0;
        for(var i = 1;i<((v1a.length>v2a.length)?v1a.length:v2a.length);i++) {
            result = _isGreaterThan(v1a[i], v2a[i]);
            if(result != 0) {
                return result;
            }
        }
        return result;
    }
    return -1;
    
    function _isGreaterThan(v1, v2) {
        console.log(v1,v2);
        if(!v1) {
            v1 = "0";
        }
        if(!v2) {
            v2 = "0";
        }

        if(parseInt(v1) != parseInt(v2)) {
            return parseInt(v1) > parseInt(v2)?1:-1;
        }
        
        return 0;
    }
};
