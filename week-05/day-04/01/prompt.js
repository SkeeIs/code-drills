
function fizzBuzz(n) {
// ===================== YOUR WORK HERE =====================
for (var i = 1; i <= n; i++) {


    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
        console.log("fizzbuzz");
    }
    else if (i % 3 === 0) {
        console.log(i);
        console.log("fizz");
    }
    else if (i % 5 === 0) {
        console.log(i);
        console.log("buzz");
    }
    else {
        console.log(i);
    }
}

// ==========================================================
  
}

fizzBuzz(parseInt(process.argv[2]));

