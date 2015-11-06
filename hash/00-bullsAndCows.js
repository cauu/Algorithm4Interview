/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var bulls = [];
    var cows = [];
    var remainS = [];
    var remainG = [];
    for(var i = 0;i<guess.length;i++) {
        if(secret[i] == guess[i]) {
            bulls.push(guess[i]);
        }
        else {
            remainS.push(secret[i]);
            remainG.push(guess[i]);
        }
    }
    for(var i = 0;i<remainG.length;i++) {
        var sIndex = remainS.indexOf(remainG[i]);
        if(sIndex != -1) {
            cows.push(remainS[i]);
            remainS.splice(sIndex,1);
        }
    }
    return bulls.length + 'A' + cows.length + 'B';
};

