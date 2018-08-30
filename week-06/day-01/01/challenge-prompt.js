// Defining the card constructor function
//
// -------------------- Your Code Here --------------------
function Card(suit, value) {
  this.suit = suit;
  this.value = value;
  this.print = function () {
    console.log("The " + this.value + " of " + this.suit + "s");  
  }
}
// --------------------- End Code Area --------------------



// Defining the deck constructor function
//
// -------------------- Your Code Here --------------------
function Deck(cards) {
  this.count = function () {
      return cardArr.length;
  }
  this.shuffle = function () {

  }
  this.draw = function () {

  }
  this.add = function () {
    
    shuffle();
  }
}
// --------------------- End Code Area --------------------



// Export your two constructor functions
//
// -------------------- Your Code Here --------------------




// --------------------- End Code Area --------------------
