/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let count = 0
  let countBalanced = 0

  for (let i = 0; i < s.length; i++) {
    s[i] === 'L' ? count++ : count-- 

    if (count === 0) {
      countBalanced++
    }
  }

  return countBalanced
};