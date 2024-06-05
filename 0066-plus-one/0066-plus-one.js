/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let lastNum = digits.length 
    console.log(lastNum);
    for(let i = lastNum-1;i >=0; i--) {
        if(digits[i] < 9) {
            digits[i]++
            return digits
        }
     digits[i] = 0
    }
    digits.unshift(1)
    return digits
};