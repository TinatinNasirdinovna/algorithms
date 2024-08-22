/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let sorted = [...heights].sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sorted[i]) {
      res.push(heights[i]);
    }
  }
  return res.length;
};