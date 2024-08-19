/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b) => a-b);
    let dif = arr[1] - arr[0];
    let ans = [];
    for(let i=1;i<arr.length;i++) {
        let rest = arr[i] - arr[i-1];
        if(dif>rest) {
            dif = rest;
            ans = [[arr[i-1], arr[i]]];
        } else if(dif === rest) {
            ans.push([arr[i-1], arr[i]]);
        }
    }
    return ans;
};