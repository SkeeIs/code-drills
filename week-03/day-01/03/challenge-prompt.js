// Day 01
// Acitivity 03


console.log("==================== Question 01 ====================");
// Create a timer that creates an alert that says "Question 1" after 5 seconds
setTimeout(fiveSeconds, 5000);

function fiveSeconds() {
    alert("Question 1");
}


console.log("==================== Question 02 ====================");
// Create a timer that creates an alert that says "Question 2" after 15 seconds
setTimeout(fifteenSeconds, 15000);

function fifteenSeconds() {
    alert("Question 2");
}

// Remove the timer you just made for Question 2
clearTimeout(fifteenSeconds);

console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds
setTimeout(questionThree, 1500);

function questionThree() {
    alert("Question 3 pat 1");
}

// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds
setTimeout(questionThreeb, 1600);

function questionThreeb() {
    alert("Question 3 part 2");
}

console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 1
clearTimeout(questionThree);


console.log("==================== Question 05 ====================");
// Create a timer that plays a sound after 11 seconds and console logs "Question 5 Completed!"
setTimeout(somethingNew, 1100);

function somethingNew() {
    //var audio = new Audio("3703.mp3");
    //audio.play();
    console.log("Question 5 Completed!");
}

