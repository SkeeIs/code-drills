// 1. Configure Server
var express = require("express");

var app = express();
var PORT = 3000;

//Expected Output: 
// {
//   jerome: 50,
//   code: 80,
//   org: 58,
//   ricky: 30,
//   com: 90,
//   robert: 60,
//   chicken: 68,
//   sasha: 8
// }
var input = ["50 jerome.code.org", "30 ricky.code.com", "60 robert.chicken.com", "8 sasha.chicken.org"]

function getNumVisits(arr) {
  // 2. ================= YOUR WORK HERE ==================
  var spaceSplit = [];
  for (var i = 0; i < arr.length; i++) {
    spaceSplit.push(arr[i].split(/[\s.]+/));
  }

  var domainObj = {};
  for (var i = 0; i < spaceSplit.length; i++) {
    console.log(spaceSplit[i]);
    
    Object.keys(domainObj).forEach(function(key) {
      if (obj[key] === spaceSplit[i]) {
        console.log(spaceSplit[i] + "already a key");
      }
      else {
        domainObj = {
          
        }
      }
    })
    
    
    // for (var j = 0; j < spaceSplit[i].length; j++) {
    //   console.log(spaceSplit[i][j]);

    // }
  }

  //console.log(spaceSplit);
  //console.log(spaceSplit[0][0]);



  // ===================================================
}
getNumVisits(input);
// At the root route, send the solution as JSON
  //3. ================= YOUR WORK HERE ==================
  app.get("/", function(req, res) {
    res.json(object);
  });






  // ===================================================


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
// 1. Create server