//  YOUR WORK HERE


var testNum = 644;
var testNum2 = 42;
var testNum3 = 89657;
var numArr = [];
var numString;
var sum;

//digitEater gets called with testNum(644) as argument.
function digitEater(num) {
 
  //the global var numString gets assigned to a string of argument (644 in this case)  
  numString = num.toString();
  numArr = [];
  //iterate through the string numString & push each value into the global var numArr
  for (var i = 0; i < numString.length; i++) {
    numArr.push(numString[i]);
  }
  //console.log("before: " + numArr);

  //iterate through numArr & turn each index [6,4,4] from a string back into an integer
  for (var i = 0; i < numArr.length; i++) {
    numArr[i] = parseInt(numArr[i]);
  }
  //console.log("after: " + numArr);
  
  //assign global variable sum equal to zero so that if we pass this
  sum = 0;
  for (var i = 0; i < numArr.length; i++) {
    sum += numArr[i];  
  };
  //console.log("Sum:  " + sum);
  numString = sum.toString();
  //console.log("numString length: " + numString.length);
  //console.log("NumString:  " + numString);
  if (numString.length > 1) {
    digitEater(sum);  
  }
  
  else {
    console.log(sum);  
  }
}

//testNum (644) gets passed into the function digitEater.
digitEater(testNum);

digitEater(testNum2);

digitEater(testNum3);
