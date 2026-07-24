//question: https://leetcode.com/problems/valid-palindrome/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   
   const cleanStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    let j=cleanStr.length-1;
    let i=0;

    while(i < j){
        if(cleanStr[i] !== cleanStr[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
      
    };

    console.log(isPalindrome("A man, a plan, a canal: Panama"))