/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let arr = s.split('').map(el => el.charCodeAt())
    let arr2 = []
    for(let i = 1; i < arr.length; i++) {
        arr2.push(Math.abs(arr[i] - arr[i-1]))
    }
    return arr2.reduce((acc, el) => acc + el)
};