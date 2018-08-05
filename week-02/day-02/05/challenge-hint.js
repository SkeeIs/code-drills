// declare the variable we're storing the confirm dialogue in
var confirmResponse;
var userInput = "";

// create a key press listener
document.addEventListener("keyup", myFunction);
  function myFunction() { 
    userInput = event.key;
  // store the key the user pressed into a variable so we can 
  // refer to it easier in this function and
  // change it to lower case to make our logic not case sensitive
    userInput.toLowerCase();

  // console log the key that the user pressed
    console.log(userInput);
  
  // check whether the user pressed the "h" key
  if (userInput === "h") {
    // create a confirm dialogue when they do and store the response from that
    // dialogue into the variable we declared outside the event listener
    confirmResponse = confirm("You pressed H");
    console.log(confirmResponse);
  }
  // check whether the user pressed the "k" key
    // check whether the user had answered true to the previous confirm dialogue
    // display the corresponding alert dialogue
  if (userInput === "k") {
    if (confirmResponse === true) {
      alert(confirmResponse);
    }  
  }
}