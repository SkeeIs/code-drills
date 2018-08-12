// Day 01
// Activity 02

// This function takes in a string and returns a jQuery element.
// The element should be a button that contains the argument string as both
// its text value and its data value. We will be using this button to
// display the string in the display-area when clicked later.
function createButton(str) {
  // ---------- Your Code Here ----------
  var buttonDiv = $("<div>");
  var newButton = $("<button>");
  newButton.attr("class", "word-buttons");
  newButton.attr("data-value", str);
  newButton.text(str);
  console.log(newButton);
  buttonDiv.append(newButton);
  $("#button-area").append(buttonDiv);





  // ---------- End of Code area ----------
}



// This function is executed when one of our generated buttons is clicked.
// We've been using anonymous functions up until now, but we can define this
// function before hand and pass in the pointer to this function in the
// click listener.
// This function should take the string stored in the data field of the button
// that was clicked on and append it to the display-area.
function displayContent(event) {
  // ---------- Your Code Here ----------






  // ---------- End of Code area ----------
}



// Put your click listeners here.
  $(document).ready(function () {
  // ---------- Your Code Here ----------
    $(".word-buttons").on("click", displayContent());

    $("#clear-button").on("click", function() {
      $("#user-input").val(" ");
    })
    $("#submit-button").on("click", function() {
      var userWord = $("#user-input").val();
      createButton(userWord);
    });
  });  
  // ---------- End of Code area ----------