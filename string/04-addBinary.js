/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var opStack = [];
    var result = "";
    for(var i=a.length-1, j = b.length-1;i>=0||j>=0; i--,j-- ) {
         var ones = 0;
         if(!!opStack.pop()) {
             ones++;
         }
         a[i] === '1'?ones++:ones;
         b[j] === '1'?ones++:ones;
         switch(ones) {
             case 1:
                 result ="1" +result;
                 break;
             case 2:
                 opStack.push("1");
                 result = "0" + result;
                 break;
             case 3:
                 opStack.push("1");
                 result = "1" + result;
                 break;
             default: 
                 result = "0" + result;
         }
    }
    if(opStack.length != 0) {
        result = "1" + result;
    }
    return result;
};
