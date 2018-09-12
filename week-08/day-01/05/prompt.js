//  YOUR WORK HERE

var testArr = [5,2,6,7,8,9,4,6,8];
var testArr2 = [2,4,7,3,1,7,9,4,8,0,4,7,9,3,5,5,6,3,2,2,2,2,1];
var testArr3 = [1,2,3,4];

var groupings = 4;
var groupings2 = 3;
var groupings3 = 2;

function grouper(arr, breakpoint) {
  
  var output = [];  
  var tempNum;
  var smallGroup = [];
  
  for (var i = 0; i < arr.length; i ++) {
     
    tempNum = arr[i];
    smallGroup.push(tempNum);
    
    if (smallGroup.length === breakpoint) {
      output.push(smallGroup);
      smallGroup = [];
    }
    
    if (i + 1 === arr.length && smallGroup.length > 0) {
        output.push(smallGroup);
    }
    
  }
  
  console.log(output);
  }

grouper(testArr, groupings);
grouper(testArr2, groupings2);
grouper(testArr3, groupings3);