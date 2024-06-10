/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let i = String(x)
    let arr = i.split('')
    let arr2 = arr.reverse().join('')
    return arr2 === i
};