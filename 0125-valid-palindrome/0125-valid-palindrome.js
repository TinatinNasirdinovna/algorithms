/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let arr = s.split('')
    let arr2 = []
    
    let arr3 = arr.map(el => el.match(/[a-z0-9]/i) ? arr2.push(el) : el)
    return arr2.join('').toLowerCase() === arr2.reverse().join('').toLowerCase()
};