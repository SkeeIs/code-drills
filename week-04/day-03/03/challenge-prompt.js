console.log("////////////////////////////// QUESTION 3.1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "averageNumbers".

  Given an array of numbers, "averageNumbers" returns their average. 
  
  *Bonus If given an empty array, it should return 0*

*/

function averageNumbers(nums) {
  // your code here
  if (nums.length === 0) {
    return 0;
  }
  
  var avgOfNums = nums.reduce((a, b) => a + b, 0) / nums.length;

  return avgOfNums;
  // code ends here
}

var input = [1, 2, 3, 4, 5];
var zeroTest = [0];
var emptyTest = [];
var output = averageNumbers(input);
console.log(output); // --> 3
console.log(averageNumbers(zeroTest));
console.log(averageNumbers(emptyTest)); 
console.log("////////////////////////////// QUESTION 3.2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "keysCounter".

Given an object, "keysCounter" returns how many properties the given object has.

*/
function keysCounter(obj) {
  // your code here
  return Object.keys(obj).length;
  // code ends here
}

var obj = {
  a: 1,
  b: 2,
  c: 3
};

var output = keysCounter(obj);
console.log(output); // ---> 3


