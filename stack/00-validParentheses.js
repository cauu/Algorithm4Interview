/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s === "") {
        return true;
    }
    var op = [];
    for(var i = 0;i!=s.length;i++) {
        op.push(s[i]);
        if(op.length > 1) {
            var tp1 = op.pop();
            var tp2 = op.pop();
            if(!canPair(tp1, tp2)) {
                op.push(tp2);
                op.push(tp1);
            }
        }
    }
    return op.length === 0;
    
    function canPair(p1,p2) {
        if(!p1 || !p2) return false;
        return (p1 === ']' && p2 === '[') || (p1 === ')' && p2 === '(') || (p1 ==='}' && p2 === '{');
    }
};
