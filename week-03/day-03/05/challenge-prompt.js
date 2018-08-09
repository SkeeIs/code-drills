// Lets build another bubble sort with a while loop instead of nested for loops

// Define a boolean outside your while loop to track if an element has been swapped

// the while loop should contain the for loop that iterates through the array and 
// continue until you've been able to iterate through the array without swapping 
// any elements


function bubbleSortTwo(arr) {
    // ================= code goes here ===========================
          
        do {  
          var swap = false;
           for (var i = 0; i < arr.length; i ++) {
            var placeHolder = arr[i];
              if (arr[i + 1] < arr[i]) {
                arr[i] = arr[i + 1];
                //console.log(anArray[0]);
                arr[i + 1] = placeHolder;
                //console.log(anArray[1]);
                swap = true;
              }
          }
        }
        while (swap === true)

    
    // ============================================================
}


var age = [34, 23, 3, 76, 20, 84, 18, 9];
var newAge = bubbleSortTwo(age);
console.log(newAge)
