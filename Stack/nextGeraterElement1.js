//question: https://leetcode.com/problems/next-greater-element-i/submissions/2118191720/


function NGE(nums1, nums2){
    let stack = [];
    let result = [];

    for(let i = nums2.length-1; i>=0; i--){

        while(stack.length > 0 && stack[stack.length-1] <= nums2[1]){
        stack.pop();
       }

    if(stack.length === 0 ){
        result[i] = -1;
    } else{
        result[i] = stack[stack.length-1];
    }

    stack.push(nums2[i]);
  }

  let answer = [];

  for(let i=0;i<nums1.length;i++){
    for(let j=0;j<nums2.length;j++){
        if(nums1[i] === nums2[j]){
            answer.push(result[j]);
            break;
        }
    }
  }

  return answer

}