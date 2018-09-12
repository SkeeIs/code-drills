//  YOUR WORK HERE
function pyramidBuilder (num) {
    var octo;
    var space;
    var lSpace;
    var rSpace;
    var print;

  //2 * n - 1
    for (var i = 0; i < num; i++) {
      octo = 2 * i + 1;
      space = 2 * num - (2 * i + 1);
    //console.log(space);
      lSpace = Math.floor(space / 2);
    //   console.log(lSpace);
      rSpace = Math.floor(space / 2);
    //   console.log(rSpace);
      print ="`" + " ".repeat(lSpace) + "#".repeat(octo) + " ".repeat(rSpace) + "`";
      console.log(print);
    }
  }
  
  pyramidBuilder(3);
  pyramidBuilder(5);
  pyramidBuilder(8);
  pyramidBuilder(11);





//   function createPyramid(rows)
// {
// for(var i=0;i<rows;i++) {
// var output="";
//     for(var j=0;j<rows-i;j++) {
//         output+=" ";
//     }
//     for(var k=0;k<=i;k++) {    
//        output += "* ";
//     }
//     console.log(output);  
// }  
// }


// createPyramid(5);