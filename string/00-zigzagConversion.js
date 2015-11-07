/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(s === "" || numRows === 1) {
        return s;
    }
    var result = [];
    var resultStr = '';
    for(var i = 0;i<numRows;i++) {
        if(!result[i]) {
            result[i] = [];
        }
    }
    
    var group = 2*numRows - 2;
    for(var i = 0;i<s.length;i++) {
        var rowIndex = i%group<numRows?i%group: group-i%group;
        result[rowIndex].push(s[i]);
    }
    for(var i in result) {
        for(var j in result[i])
            resultStr += result[i][j];
    }
    return resultStr;
};
