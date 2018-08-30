// ======== You are given NOTHING to start with 😱 ========
var fs = require("fs");

var data = process.argv[2];

fs.readFile("quotes.txt", "utf8", function(error, data) {
    if (error) {
       return console.log(error);
    }

    var arr = data.split(";");
    
    for (var i = 0; i < arr.length; i++) {
    var doubSplit = arr[i].split("-");
    console.log(doubSplit);
    }
    
})
