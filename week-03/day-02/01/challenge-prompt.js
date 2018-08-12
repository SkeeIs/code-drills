// Day 02
// Activity 1


// ------------------------------------------------------------------
console.log("==================== Question 01 ====================");
// Create an interval that console logs "Question 01" every 5 seconds
var questOne;

function repeat() {
    questOne = setInterval(logFunction, 5000);
}

function logFunction() {
    console.log("Question 01");
}
repeat();
// ------------------------------------------------------------------
console.log("==================== Question 02 ====================");
// Create an interval that creates an alert that says "Question 02" every 10 seconds
var questTwo;

function repeater() {
    questTwo = setInterval(logTwo, 10000);
}

function logTwo() {
    console.log("Question 02");
}
repeater();
// Clear the interval you made in this question
clearInterval(questTwo);


// ------------------------------------------------------------------
console.log("==================== Question 03 ====================");
// Create an interval that appends "3" to the div with an id of "question-03"
// every 2 seconds
var questThree;

function repeatThree() {
    questThree = setInterval(threeFunc, 2000);
}

function threeFunc() {
    $("#question-03").append("3");
}
repeatThree();
// ------------------------------------------------------------------
console.log("==================== Question 04 ====================");
// Create an interval that empties the "#question-03" element every 6 seconds
var questFour;

function repeatFour() {
    questFour = setInterval(fourFunc, 6000);
}

function fourFunc() {
    $("#question-03").empty();
}
repeatFour();
// ------------------------------------------------------------------
console.log("==================== Question 05 ====================");
// Create an interval that appends "5" to the div with an id of "question-05"
// every second and clear this interval after 5 seconds
var questFive;

function repeatFive() {
    questFive = setInterval(fiveFunc, 1000);
}

function fiveFunc() {
    $("#question-05").append("5");
}

repeatFive();

var clearFive;

function clearOut() {
    clearFive = setInterval(fiveEmpty, 5000);
}

function fiveEmpty() {
    $("#question-05").empty();
}

clearOut();
// ------------------------------------------------------------------
console.log("==================== Question 06 ====================");
// Create an interval that appends "6" to the div with an id of "question-06"
// every second
var questSix;

function repeatSix() {
    questSix = setInterval(sixFunc, 1000);
}

function sixFunc() {
    $("#question-06").append("6");
}

repeatSix();

// Create a timer to clear the interval after 6 seconds
var clearSix;

function clearOutSix() {
    clearSix = setInterval(sixEmpty, 6000);
}

function sixEmpty() {
    $("#question-06").empty();
}

clearOutSix();


// ------------------------------------------------------------------
console.log("==================== Question 07 ====================");
// create a timer to clear the interval from question 1 after 10 seconds
var clearOne;

function clearOutOne() {
    clearOne = setInterval(oneStop, 10000);
}

function oneStop() {
    clearInterval(questOne);
}

clearOutOne();


