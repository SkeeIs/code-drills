// 1. Configure Server

//Expected Output: 
// "ethae uickqae ownbrae ogdae umpedjae overwae ethae azylae oxfae applewae"
var input = "The quick brown dog jumped over the lazy fox apple"

function pigLatin(sen) {
  // 2. ================= YOUR WORK HERE ==================
  var pigLatinArr = [];
  var wordArr = [];
  wordArr.push(sen.split(" "));
  
  for (var i = 0; i < wordArr.length; i++) { 
    var vowelSplitHolder = wordArr[i];
    console.log("VSPLITTEMP??????????" + vowelSplitHolder);
   vowelSplitHolder.replace(/(\w+?)([aeiou]\w+)/i, '$2$1');

   pigLatinArr.push(vowelSplitHolder);
  }

  //console.log(wordArr);
  //console.log(pigLatinArr);



  // ===================================================
}
pigLatin(input);

// At the root route, send the solution as JSON
  //3. ================= YOUR WORK HERE ==================
  // app.get("/", function(req, res) {
  //   res.json();
  // })






  // ===================================================


// Listener
// ===========================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT: " + PORT);
// });
// 1. Create server