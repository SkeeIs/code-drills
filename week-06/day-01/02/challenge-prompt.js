// Create a `Human` constructor function that takes in a name 
// and creates an object with that `name` and an `age` of 0
// The `Human` object should also have a method called `birthday`
//
// `birthday` takes in a number and adds that many years to the `age` property
// and then console logs out a congratulatory message containing the name of
// the human and their new age
function Human(name) {
  this.name = name;
  this.age = 0;
  this.birthday = function (num) {
    this.age = this.age + num;
    console.log("Happy Birthday " + this.name + "!!! " + "You have turned " + this.age + " years old!");
  }
}




// Create a new Human object with a name of "Blake" and store it inside
// the variable `blake`
var blake = new Human("Blake");

// Call on the `birthday` method of `blake` to increase their `age` by 1 
// and add a new method `talk` to `Human` by using the `prototype` property
blake.birthday(1);
// `talk` should be a function that takes in no arguments and console logs "Ma. Da."
Human.prototype.talk = function() {
  console.log("Ma. Da.");
}
// Call on the `talk` method of `blake`
blake.talk();


// Call on the `birthday` method of `blake` to increase their `age` by 1 
// and add a new method `walk` to `Human` by using the `prototype` property
blake.birthday(1);
// `walk` should be a function that takes in no arguments and console logs "Blake walked!"
Human.prototype.walk = function () {
  console.log(this.name + " walked!");
}
// Call on the `walk` method of `blake`
blake.walk();
// Call on the `birthday` method of `blake` to increase their `age` by 1 
// Change the talk method of `Human` to console log "Hello, my name is " followed by their name
blake.birthday(1);

Human.prototype.talk = function () {
  console.log("Hello, my name is " + this.name);
}
// Call on the `talk` method of `blake`
blake.talk();

// Call on the `birthday` method of `blake` to increase their `age` by 4
// Add a new property `school` to `blake` and set it to "elementary"
blake.birthday(1);

blake.school = "elementary";
// Do not use `prototype` when you're changing the property of an instance of an object
// Change the talk method of `blake` to console log 
// "Hello, my name is Blake and I go to {school} school!"
// where {school} is the school property of `blake`
blake.talk = function () {
  console.log("Hello, my name is Blake and I go to " + this.school + " school!");
}

// Call on the `talk` method of `blake`
blake.talk();

// Create a new Human object with a name of "Ari" and store it inside
// the variable `ari`
var ari = new Human("Ari");

// Console log out the values of the `age` and `school` properties of `ari`
console.log(ari.age + "\n" + ari.school);

// Call on the `walk` method of `ari`
ari.walk();

// Call on the `talk` method of `ari`
ari.talk();

// Why is the `talk` method different for `ari` than for `blake`?
/*
  Answer here:

Because the last time we adjusted the talk method for blake (line 63-64) we only changed the property of talk for the variable of blake. The lat time we changed the property of talk for all objects created with HUman function was lines 48-49 to "hello, my name is".

  

*/