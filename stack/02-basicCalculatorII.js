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
                nums.push(_doCalc(nums, operations));
            }
            else {
                operations.push(s[i]);
            }
        }
    }

    return Math.round(_doCalc(nums, operations));

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
        else if(op === '*') {
            return res * acc;
        }
        else if(op === '/') {
            return formatFloat(1/acc,2) * res;
        }
    }

    function _getOpPrior(op) {
        if (op === '+' || op === '-') {
            return 1;
        }
        else if(op === '*' || op === '/') {
            return 2;
        }
        return 0;
    }
    
    function formatFloat(src,pos){ 
        return Math.round(src*Math.pow(10, pos))/Math.pow(10, pos); 
    } 

    function _doCalc(ns, os) {
        var opHelper = [],
            numHelper = [];
        var tmpOp, tmpNum, tmpRes = 1, formerOp;
        while(true) {
            tmpNum = ns.pop();
            tmpOp = os.pop();
            if(tmpOp === '(' || !tmpOp) {
                if(_getOpPrior(formerOp) === 2) {
                   tmpRes = _cal(tmpRes, tmpNum, '*'); 
                   numHelper.push(tmpRes);
                }
                else {
                   numHelper.push(tmpNum);
                }
                tmpRes = 0;
                //计算只剩+和-的式子的结果
                while(true) {
                    //console.log(numHelper);
                    tmpNum = numHelper.splice(0,1)[0];
                    if(!(tmpOp = opHelper.splice(0,1)[0])) {
                        return _cal(tmpRes, tmpNum, '+');
                    }
                    tmpRes = _cal(tmpRes, tmpNum, tmpOp);
                }
            }
            else if(_getOpPrior(tmpOp) === 1) {
                opHelper.push(tmpOp);
                if(_getOpPrior(formerOp) === 2) {
                    tmpRes = _cal(tmpRes, tmpNum, '*');
                    numHelper.push(tmpRes);
                }
                else {
                    numHelper.push(tmpNum);
                }
            }
            else if(_getOpPrior(tmpOp) === 2)  {
                tmpRes = _cal(tmpRes, tmpNum, tmpOp);
            }
            formerOp = tmpOp;
        }
    }
}

