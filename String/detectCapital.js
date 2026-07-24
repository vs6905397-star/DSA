//question: https://leetcode.com/problems/detect-capital/
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let capitalCount = 0;

    for (let i = 0; i < word.length; i++) {
        let code = word[i].charCodeAt(0);
        if (code >= 65 && code <= 90) {
            capitalCount++;
        }
    }

    if (capitalCount === word.length || capitalCount === 0) {
        return true;
    }

    if (capitalCount === 1 && word[0].charCodeAt(0) >= 65 && word[0].charCodeAt(0) <= 90) {
        return true;
    }
    return false;
};


console.log(detectCapitalUse("FLaG"))