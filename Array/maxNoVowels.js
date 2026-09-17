//question: https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = 0;

    for(let i=0; i<k; i++){
        if(s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u"){
            vowels++;
        }
    }

    let maxVowels = vowels;

    for(let j=k; j<s.length; j++){
        if(s[j] === "a" || s[j] === "e" || s[j] === "i" || s[j] === "o" || s[j] === "u"){
            vowels++;
        }

        if(s[j-k] === "a" || s[j-k] === "e" || s[j-k] === "i" || s[j-k] === "o" || s[j-k] === "u"){
            vowels--;
        }

        maxVowels = Math.max(maxVowels, vowels);
    }

    return maxVowels;
};