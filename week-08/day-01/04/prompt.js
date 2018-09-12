//  YOUR WORK HERE

var minions = [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]];
var bossMinionInput = 1;
var entryLvlMinion;

function doThaWork (bacon, chicken) {
  
  var bossMinion = chicken;
  console.log(bacon);
  
  for (var i = 0; i < bacon.length; i++) {
    
    if (bacon[i][0] === bossMinion) {
      
      var productivity = bacon[i][1];
      console.log("boss prod: " + productivity);
      
      if (bacon[i][2]) {
        
        for (var j = 0; j < bacon[i][2].length; j++) {
          
          console.log("bacon[i][2]: " + bacon[i][2]);
          
          entryLvlMinion = bacon[i][2][j];
          
          for (var h = 0; h < bacon.length; h++) {
            
            console.log("minion index: " + entryLvlMinion);
            
            if (bacon[h][0] === entryLvlMinion)  {
            
            console.log("minion info: " + bacon[h]);
            productivity += bacon[h][1];
            console.log("final productivity: " + productivity);
            
            }
          }

        }  
      
      }
    
    }
  
  }   

}



doThaWork(minions, bossMinionInput);