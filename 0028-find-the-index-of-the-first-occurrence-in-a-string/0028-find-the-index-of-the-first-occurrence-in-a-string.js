/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
  var strStr = function(haystack, needle) {
  if(haystack.length < needle.length) {
    return -1
  }
  for(let i = 0; i < haystack.length; i++) {
    let j = 0;
    let boolFound = true 
    while(j < needle.length) {
        if(haystack[i+j] !== needle[j]) {
            boolFound = false;
            break;
        }  
        j++
    }
    if(boolFound) {
        return i
    }
  }
  return -1
  };
