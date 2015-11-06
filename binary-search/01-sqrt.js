/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x === 0) {
        return 0;
    }
    var h = 0;
    while((1<<h)*(1<<h) <=x ) {
        h++;
    }
    h--;
    var b = h-1;
    var result = 1<<h;
    while(b >= 0) {
        var temp = result|(1<<b);
        if(temp*temp < x) {
            result = temp;
        }
        else if(temp*temp == x) {
            result = temp;
            break;
        }
        b--;
    }
    return result;
};
