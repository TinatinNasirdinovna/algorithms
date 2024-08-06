/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(text) {
    const frequencyMap = new Map();
    for (const letter of text) {
        frequencyMap.set(letter, (frequencyMap.get(letter) || 0) + 1);}
    const sortedLetters = Array.from(frequencyMap.entries())
        .sort((a, b) => b[1] - a[1])
        .map(([letter, count]) => letter.repeat(count));

    return sortedLetters.join('');
};