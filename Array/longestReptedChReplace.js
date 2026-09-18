//question: https://leetcode.com/problems/longest-repeating-character-replacement/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0;
    let maxLength = 0;
    let map = new Map();
    let maxFreq = 0;

    for(let right=0; right<s.length; right++){

        map.set(s[right], (map.get(s[right]) || 0) +1);

        maxFreq = Math.max(maxFreq, map.get(s[right]));

        while((right-left+1) - maxFreq > k){
            map.set(s[left], map.get(s[left])-1);
            left++;
        }
        
        maxLength = Math.max(maxLength, right-left+1);
    }

    return maxLength;
};