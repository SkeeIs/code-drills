
// declear a variable of welcomePrompt with a prompt and a string of Welcome to the sandwich shop, what do i call you ?
var welcomePrompt = prompt("Welcome to the sandwich shop, what do I call you?");

// then alert with a string of a variable of hello and the varible of welcomePrompt
alert("Hello! " + welcomePrompt);

// declear a variable with a confirm and a string of are you here for a sandwich ?
var foodPrompt = confirm("Are you here for a sandwich?")
// if question is equal to true

    // prompt the user with a string of What kind of sandwich would you like ?

    // then write on the page with the variable welceomPrompt and a string of please wait 10 min for your with another variable of foodPrompt

    // question isn't true write on the page with a string of if you dont want a sandwich what are you here for !
if (foodPrompt === true) {
    var sandwichType = prompt("What kind of sandwich would you like?");
    document.write(welcomePrompt + ", Please wait 10 minutes for your " + sandwichType + " sandwich! Thank you!")
}
else {
    prompt("What are you here for?!?!")
}