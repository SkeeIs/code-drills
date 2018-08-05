var letterHistory = [ ];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

document.addEventListener("keypress", myFunction);

function myFunction() {
    var letter = event.key.toLowerCase();

    if (alphabet.includes(letter)) {
        document.getElementById("last-letter").innerHTML = letter;
        letterHistory.push(letter);
        document.getElementById("letter-string").innerHTML = letterHistory;

    }

    else {
        document.getElementById("last-letter").innerHTML = "Please press a valid letter";

    }
}