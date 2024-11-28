/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let groups = {};

  strs.forEach((str) => {
    let key = str.split("").sort().join('');
    if(!groups[key]){
        groups[key]= []
    }
    groups[key].push(str)
  });
  return Object.values(groups)
};