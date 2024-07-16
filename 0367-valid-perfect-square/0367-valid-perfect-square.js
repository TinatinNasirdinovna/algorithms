/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    return num == Math.pow(Math.floor(Math.sqrt(num)), 2);
};