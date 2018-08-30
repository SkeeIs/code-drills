var inquirer = require("inquirer");
var hero = {
    health: 100
  }

 var zombies = [zombie1 = {
    health: 100,
    attack: [0, 5],
    //Chance of dodging (%)
    agility: 15
  },

   zombie2 = {
    health: 90,
    attack: [1, 6],
    //Chance of dodging (%)
    agility: 18
  },

   zombie3 = {
    health: 85,
    attack: [2, 4],
    //Chance of dodging (%)
    agility: 20
  },

   zombie4 = {
    health: 80,
    attack: [2, 5],
    //Chance of dodging (%)
    agility: 22
  },

   zombie5 = {
    health: 60,
    attack: [7, 10],
    //Chance of dodging (%)
    agility: 10
  }]

var weapons = [bearHands = {
    //number of zombies affected
    reach: 1,
    //Range of possible damage
    attack: [5,5],
    //Chance of taking damge back (%)
    risk: 95,
    //chance of landing damage (%)
    reliability: 90,
    //"health" of gun
    uses: 1000000000000000 
  },
  
   machete = {
    //number of zombies affected
    reach: 1,
    //Range of possible damage
    attack: [40,60],
    //Chance of taking damge back (%)
    risk: 80,
    //chance of landing damage (%)
    reliability: 90,
    //"health" of gun
    uses: 5 
  },
  
   shotgun = {
    //number of zombies affected
    reach: 2,
    //Range of possible damage
    attack: [30,50],
    //Chance of taking damge back (%)
    risk: 65,
    reliability: 80,
    //"health" of gun
    uses: 5 
  },
  
   pistol = {
    //number of zombies affected
    reach: 2,
    //Range of possible damage
    attack: [25,40],
    //Chance of taking damge back (%)
    risk: 50,
    reliability: 75,
    //"health" of gun
    uses: 5 
  },
  
   machineGun = {
    //number of zombies affected
    reach: 3,
    //Range of possible damage
    attack: [15,30],
    //Chance of taking damge back (%)
    risk: 30,
    reliability: 65,
    //"health" of gun
    uses: 5 
  },
  
   sniper = {
    //number of zombies affected
    reach: 1,
    //Range of possible damage
    attack: [40,60],
    //Chance of taking damge back (%)
    risk: 50,
    reliability: 10,
    //"health" of gun
    uses: 5 
  },
  
   rpg = {
    //number of zombies affected
    reach: 4,
    //Range of possible damage
    attack: [40,60],
    //Chance of taking damge back (%)
    risk: 95,
    reliability: 40,
    //"health" of gun
    uses: 5 
  }]  

function initialize () {
    hero.health = 100;
    zombies[0].health = 100;
    zombies[1].health = 90;
    zombies[2].health = 85;
    zombies[3].health = 80;
    zombies[4].health = 60;

    gamePlay();
}

function gamePlay () {
    inquirer
    .prompt([
        {
        type: "list",
        message: "!~!~!~CHOOSE YOUR WEAPON~!~!~!",
        name: "weaponChoice",
        choices: ["bearHands", "machete", "shotgun", "pistol", "machineGun", "sniper", "rpg"]
        },
        {
        type: "list",
        message: "Choose the zombie you want to attack",
        name: "zombieChoice",
        choices: ["zombie1", "zombie2", "zombie3", "zombie4", "zombie5"]    
        }
    ])
    .then(function(inquirerResponse) {
        console.log(inquirerResponse.weaponChoice);
        console.log(inquirerResponse.zombieChoice);
        agilityCheck(inquirer.zombieChoice.agility);
        reliabilityCheck(inquirer.weaponChoice.reliability);
        
        
    })

}
initialize();

//calculates the random amount of damage done to or by the zombies within given range
function randomDamage (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//calculates if zombie dodges
function agilityCheck (num) {
    (Math.floor(Math.random() * num) == 0);
}
console.log(agilityCheck(18));
//calculates if weapon hits or misses
function reliabilityCheck (num) {
    return (Math.floor(Math.random() * num) == 0);
}

//calculates the amount of damage hero takes
function heroHealth () {
    hero.health = hero.health - randomDamage(min, max);
}

//calculates the number of weapon uses left
function weaponUses () {
    weapons.inquirer.weaponChoice.uses = weapons.inquirer.weaponChoice.uses - 1;
}

//calculates the amount of damage zombie takes
function zombieHealth () {
    zombies.inquirer.zombieChoice.health = zombies.inquirer.zombieChoice.health - randomDamage(min, max);
}

