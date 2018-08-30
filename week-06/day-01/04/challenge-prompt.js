// Long Division

// This is the divide function. It takes in a dividend and a divisor 
// and returns the quotient from dividing the dividend by the divisor
function divide (dividend, divisor) {
// -------------------- Your Code Here --------------------
if (divisor === 0) {
    console.log("Divide by 0 ERROR");
}




// --------------------- End Code Area --------------------
}

// Exporting the divide function for use in the test file.

function divide(a, b) {
    // if (b === 0) {
    //   throw 'Division by zero is undefined: ' + a + '/' + b;
    // }
    var sign = 1;
    if (a < 0) {
      a = -a;
      sign = -sign;
    }
    if (b < 0) {
      b = -b;
      sign = -sign;
    }
    var result = 0;
    while (a >= 0) {
      a -= b;
      result++;
    }
    return (result - 1) * sign;
  }

module.exports = divide;  