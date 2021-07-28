var readlineSync = require('readline-sync');
var playerName = readlineSync.question("May I have your name please? ");

console.log(`Welcome ${playerName} to the Escape Room Simulation!`);

//Two Boolean Flags
var isAlive = true;
var hasFoundKey = false;

while (isAlive == true){
    const optionID = readlineSync.keyIn('Press 1 to put hand in hole \n Press 2 to find the key \n Press 3 to open the door ', {limit: '$<1-3>'});
    if (optionID == 1){
        //Put hand in hole, game is over

    }
    else if (optionID == 2 && hasFoundKey == false){
        //Find the key, Not found the key before

    }
    else if (optionID == 2 && hasFoundKey == true){
        //Player had already found the key before, s/he is wasting time!
    }
    else if (optionID == 3 && hasFoundKey == false){
        //Player has not found the key yet, redirect him/her to option-2
    }
    else if (optionID == 3 && hasFoundKey == true){
        //Player has found exit already, game is over successfully, s/he has escaped the room successfully!

    }
}