/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   let arr2 = s.split(' ').map(el => el ? el : null ).filter(el => el !== null)
   return arr2[arr2.length-1].length
};