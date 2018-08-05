// declear a variable of welcomePrompt with a confirm and a string of welcome to the Boba Shop!
var welcomePrompt = confirm("welcome to the Boba Shop!")

// check if bobaShop is equal to true
Boolean(welcomePrompt);

    // write a alert with a string of hellos
    alert("Hellos");

    // declear a variable of drinks and prompt a string of what kind of boba dirnk would you like ?
    var drinks = prompt("what kind of boba drink would you like?");

    // declear a variable of sweets and prompt a string of how sweet do you want your drink 0,50,100,200 ?
    var sweets = prompt("how sweet do you want your drink 0,50,100,200?");
    
    // now check if they put 50
        

        // if 50 alert half sweetened
        if (sweets === "50") {
            alert("Half Sweetened");
        }
    
        // else if sweets 100 
        else if (sweets === "100") {
            

        // if 100 alert normal sweet
            alert("Normal Sweetened");
        }
    
        // else if sweet 200
        else if (sweets === "200") {
    
        

        // if 200 alert super sweet
            alert("Super Sweetened");
        }    

        // finally else alert with a string of no sweets added
        else {
            alert("Unsweetened")
        }

    // then write on the page with a string "of your order of plus " svariable drinks and a string of " boba with the sweet level of " and a variable of sweets
        if (drinks && sweets) {
            document.write("Your order of " + drinks + " boba with the sweet level of " + sweets + " will be ready shortly!");
        }    
            // else say a string of goodbye.
        else {
            document.write("Goodbye!");
        }
