var playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;

var playerAttack = 10;

var playerMoney = 10;

//log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;


//Game States



//"Win"- Player robot defeats all enemy robots.

// *fight all enemy robots

// *defeat each enemy robot


//"Lose"- Player robot's health is zero or less.



var fight = function() {

    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //Alert Fight or Skip?
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

    //Subract the value of 'Player Attack' from 'Enemy Health' and use that result to update the value in 'Enemy Health' variable
    enemyHealth = enemyHealth - playerAttack;

    console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    //Check enemy's health
    if (enemyHealth <=0 ) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //Subtract the value of 'Enemy Attack' from 'Player Health' and use that result to update the value in 'Player Health' variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining."
        );


    //check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }

    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    //If player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
    //if no (false), ask question again by running fight () again
        else {
            fight();
        }
    
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
}; //end of fight function

//fight();


