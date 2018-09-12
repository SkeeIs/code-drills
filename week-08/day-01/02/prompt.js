//  YOUR WORK HERE

function staircaseBuilder (num) {
  var octo;
  var space;
  var print;

  for (var i = 0; i < num; i++) {
    octo = i + 1;
    space = num - 1 - i;
    print = "#".repeat(octo) + " ".repeat(space);
    console.log(print);
  }
}

staircaseBuilder(5);
staircaseBuilder(8);