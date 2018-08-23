// ======== You are given NOTHING to start with 😱 ========
var fs = require("fs");

var data = process.argv[2];

fs.readFile("quotes.txt", "utf8", function(error, data) {
    if (error) {
        console.log(error);
    }
    
}
