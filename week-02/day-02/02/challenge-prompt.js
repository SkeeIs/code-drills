// declare a variable named ourArray and assign an empty array to it
var ourArray = [];

// we can `push` values into an array with the push method. Documentation can be found here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// Let's push the number 1 into ourArray
ourArray.push(1);

// push the string "hello" into ourArray
ourArray.push("hello");

// push the boolean false into ourArray
ourArray.push(false);

// push the number 84 into ourArray
ourArray.push(84);

// push the string "world" into our Array
ourArray.push("world");

// console log ourArray
console.log(ourArray);


// This seperator is here to make your console logs a little easier to read 
// by creating seperations between the different sections of the activity
console.log("--------------------------Seperator 1--------------------------");

// declare a variable named oneToTen and assign it an array containing the numbers from 1 to 10
var oneToTen = [0,1,2,3,4,5,6,7,8,9,10];

// console log the element at index 4
console.log(oneToTen[4]);

// console log the element at index 7
console.log(oneToTen[7]);



// This seperator is here to make your console logs a little easier to read 
// by creating seperations between the different sections of the activity
console.log("--------------------------Seperator 2--------------------------");

// We've declared this array for you
var numArray = [2, 65, 3, 7, 39, 22, 11, 94, 299, 9, 20, 21, 51, 37];
// iterate through numArray and create an individual console log for every number greater than 50
for (var i = 0; i < numArray.length; i++) {
  if (50 < numArray[i]) {
    console.log(numArray[i]);
  }
}

// iterate through numArray and create an alert that tells us 
// the index of all the occurances of the number 11
for (var i = 0; i < numArray.length; i++) {
   if (11 === numArray[i]) {
     alert(i);
   }
 }

// iterate through numArray and console log the sum of all the numbers

var sum = numArray.reduce(function(a, b) { return a + b; });
 
console.log(sum);


// // iterate through numArray and console log the sum of all the numbers greater than 50
//try creating a second array of only the numbers >50 
var newArray = [];

for (var i = 0; i < numArray.length; i++) {
   if (numArray[i] > 50) {
    newArray.push(numArray[i]);
   }
   
}
var sumOver = newArray.reduce(function(a, b) { return a + b; });
 
console.log(sumOver);
// iterate through numArray and console log the sum of all the even numbers
var evenArray = [];
for (var i = 0; i < numArray.length; i++) {
  if (numArray[i] % 2 === 0) {
    evenArray.push(numArray[i]);
  }
}
var evenSum = evenArray.reduce(function(a, b) { return a + b; });
console.log(evenSum);
// This seperator is here to make your console logs a little easier to read 
// by creating seperations between the different sections of the activity
console.log("--------------------------Seperator 3--------------------------");

// // We've declared this array for you
var fruits = ["Apple", "Orange", "Banana", "Pomelo", "Apple", "Kiwi", "Peach", "Banana", "Grape", "Tomato", "Kiwi", "Apple", "Watermelon", "Lemon", "Pomelo", "Apple", "Banana", "Peach", "Apricot", "Grape"];
// // iterate through fruits and console log the number of times "Apple" appears in the array
var txt = [];

for (var i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Apple") {
    txt.push(fruits[i]);
  }
}
console.log(txt.length);
// iterate through fruits and console log the number of times "Peach" appears in the array
var peaches = [];

for (var i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Peach") {
    peaches.push(fruits[i]);
  }
}
console.log(peaches.length);

// iterate through fruits and console log the number of fruits that start with "P" in the array
var pStart = [];

for (var i = 0; i < fruits.length; i++) {
  if (fruits[i][0] === "P") {
    pStart.push(fruits[i]);
  }
}
console.log(pStart.length);

// create a new empty array named uniqueFruits
var uniqueFruits = [];

// iterate through fruits and populate uniqueFruits with only unique values from fruits
// you should a shorter array without repeated values
for (var i = 0; i < fruits.length; i++) {
  if (uniqueFruits.includes(fruits[i])) {
  }
  else {
    uniqueFruits.push(fruits[i]);
  }
}


// console log out your uniqueFruits array
console.log(uniqueFruits);

// This seperator is here to make your console logs a little easier to read 
// by creating seperations between the different sections of the activity
console.log("--------------------------Seperator 4--------------------------");

// CHALLENGE (Optional!)
// In this challenge we're going to be working with nested arrays. 
// You can store any type of data within an array- even other arrays!
var twoDimArray = [
  [54, 6, 7, 46, 78],
  [43, 9, 6, 65, 65],
  [32, 1, 44, 1, 23],
  [55, 12, 2, 34, 2],
  [2, 12, 44, 2, 12]];
// another seperator for your convenience
console.log("     first array      ");
// iterate through the first array inside twoDimArray and console log all the numbers less than 25
var lessTwentyFive = [];

for(var i = 0; i < twoDimArray[0].length; i++) {
  if (25 > twoDimArray[0][i]) {
    lessTwentyFive.push(twoDimArray[0][i]);
  }
}

console.log(lessTwentyFive);

// another seperator for your convenience
console.log("     second array      ");
// iterate through the second array inside twoDimArray and console log all the numbers less than 25
lessTwentyFive = [];

for(var i = 0; i < twoDimArray[1].length; i++) {
  if (25 > twoDimArray[1][i]) {
    lessTwentyFive.push(twoDimArray[1][i]);
  }
}

console.log(lessTwentyFive);


// another seperator for your convenience
console.log("     third array      ");
// iterate through the third array inside twoDimArray and console log all the numbers less than 25
lessTwentyFive = [];

for(var i = 0; i < twoDimArray[2].length; i++) {
  if (25 > twoDimArray[2][i]) {
    lessTwentyFive.push(twoDimArray[2][i]);
  }
}

console.log(lessTwentyFive);


// another seperator for your convenience
console.log("     fourth array      ");
// iterate through the fourth array inside twoDimArray and console log all the numbers less than 25
lessTwentyFive = [];

for(var i = 0; i < twoDimArray[3].length; i++) {
  if (25 > twoDimArray[3][i]) {
    lessTwentyFive.push(twoDimArray[3][i]);
  }
}

console.log(lessTwentyFive);


// another seperator for your convenience
console.log("     fifth array      ");
// iterate through the fifth array inside twoDimArray and console log all the numbers less than 25
lessTwentyFive = [];

for(var i = 0; i < twoDimArray[4].length; i++) {
  if (25 > twoDimArray[4][i]) {
    lessTwentyFive.push(twoDimArray[4][i]);
  }
}

console.log(lessTwentyFive);


// another seperator for your convenience
console.log("     odd numbers      ");
// iterate through twoDimArray and the arrays inside of it and console log all the odd numbers
odd = [];

for(var i = 0; i < twoDimArray.length; i++) {
  for (var j = 0; j < twoDimArray[i].length; j++) {
    if (twoDimArray[i][j] % 2 !== 0) {
      odd.push(twoDimArray[i][j]);
    }
  }
}
console.log(odd);


// another seperator for your convenience
console.log("     sum of multiples of 3      ");
// iterate through twoDimArray and the arrays inside of it and 
// console log the sum of all the numbers that are a multiple of 3
divisibleThree = [];

for(var i = 0; i < twoDimArray.length; i++) {
  for (var j = 0; j < twoDimArray[i].length; j++) {
    if (twoDimArray[i][j] % 3 === 0) {
      divisibleThree.push(twoDimArray[i][j]);
    }
  }
}
var sumThree = divisibleThree.reduce(function(a, b) { return a + b; });

console.log(sumThree);


