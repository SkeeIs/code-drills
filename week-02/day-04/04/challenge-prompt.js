// Section 1 
// Set a variable of userTyped and use get element by id or query selector and set it equal to the element with the id of letterTyped 
var userTyped = $("#letterTyped");
// Set a variable of letterUsed and use get element by id or query selector and set it equal to the element with the id of lastLetter 
var letterUsed = $("#lastLetter");
// create a variable called LetterUsedArray and have it equal and empty array
var letterUsedArray = [];

// Section 2
// now use the onkey up jquery function and pass it the arguement of event
$(document).keyup(function(event) {
    // now set a variable of userInput equal to the event.key
    var userInput = event.key;
    console.log(userInput);
    // use the userTyped variable and the textContent property equal the userInput
   $(userTyped).text(userInput);
    // push the userInput into the letterUsedArray
    letterUsedArray.push(userInput);
    console.log(letterUsedArray);
    // use the letterUSed variable and the textContent property plus equal the userInput plus a string ,
    $(letterUsed).text(letterUsedArray + ", ");
});