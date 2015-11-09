/**
 *  * @param {string} s
 *   * @return {number}
 *    */
var calculate = function(s) {
    var nums = [];
    var operations = [];
    for(var i = 0;i<s.length;i++) {
        if(_isNumber(s[i])) {
            if(_isNumber(s[i-1])) {
                var former = nums.pop();
                nums.push(former*10 + (s[i]-'0'));
            }
            else {
                nums.push(s[i] - '0');
            }
        }
        else if(s[i] === ' ') {
            continue;
        }
        else {
            if(s[i] === ')') {
                var tmpOp, tmpNum, tmpRes;
                tmpRes = 0;
                while(true) {
                    tmpNum = nums.pop();
                    if((tmpOp = operations.pop()) === '(') {
                        tmpRes = _cal(tmpRes, tmpNum, '+');
                        break;
                    }
                    tmpRes = _cal(tmpRes, tmpNum, tmpOp);
                }
                nums.push(tmpRes);
            }
            else {
                operations.push(s[i]);
            }
        }
    }

    var op, num, result;
    result = 0;
    while(true) {
        num = nums.pop();
        op = operations.pop();
        if(!op) {
            result = _cal(result, num, '+');
            break;
        }
        result = _cal(result, num, op);
    }
    return result;

    function _isNumber(n) {
        return n>='0' & n<= '9';
    }

    function _cal(res, acc, op) {
        if(op === '+') {
            return res + acc;
        }
        else if(op === '-') {
            return res - acc;
        }
    }
}
