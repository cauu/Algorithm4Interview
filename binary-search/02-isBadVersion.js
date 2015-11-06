/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if(n==1) {
            return isBadVersion(n)?n:0;
        }
        var bl = 0;
        var br = n;
        while(bl!=br) {
            bm = Math.floor((bl+br)/2);
            if(isBadVersion(bm)!=isBadVersion(bm+1)) {
                return bm+1;
            }
            else if(isBadVersion(bm)!=isBadVersion(bm-1)) {
                return bm;
            }
            else if(isBadVersion(bm)) {
                br = bm;
            }
            else {
                bl = bm;
            }
        }
        return bm;
    };
};
