/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let groups = {}
  strs.forEach(el => {
    let key  = el.split("").sort().join()
    if(!groups[key]) {
        groups[key] = []
    }
    groups[key].push(el)
  })
  return Object.values(groups)
};