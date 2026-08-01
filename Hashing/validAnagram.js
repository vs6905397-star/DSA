//question: https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length != t.length){
        return false;
    }

    let map = new Map();

    for(let j=0;j<t.length;j++){
        let char = t[j];
        map.set(char, (map.get(char) || 0) + 1);
    }

    for(let i=0;i<s.length;i++){
        let char = s[i];

        if(!map.has(char) || map.get(char) === 0){
            return false;
        }

        map.set(char, map.get(char) - 1);
    }

    return true;
};