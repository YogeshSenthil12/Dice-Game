const diceImages = [
                "images/dice1.png",
                "images/dice2.png",
                "images/dice3.png",
                "images/dice4.png",
                "images/dice5.png",
                "images/dice6.png"
];

const playerDice1 = document.getElementById("player1Dice");
const playerDice2 = document.getElementById("player2Dice");
const rollButton = document.getElementById("rollButton");
const resultMessage = document.getElementById("resultMessage");

rollButton.addEventListener("click", rollDice);

function roll(){
    return Math.floor(Math.random() *6) + 1;
}

function chooseWinner(firstPlayer, secondPlayer){
    if(firstPlayer > secondPlayer){
        return "Player1";
    }
    else if(secondPlayer > firstPlayer){
        return "Player2";
    }
    else{
        return null;
    }
}

function addImages(firstPlayer, secondPlayer){
    playerDice1.src = diceImages[firstPlayer - 1];
    playerDice2.src = diceImages[secondPlayer - 1];
}

function rollDice(){
    const firstPlayer = roll();
    const secondPlayer = roll();
    
    addImages(firstPlayer, secondPlayer);
    
    const winner = chooseWinner(firstPlayer, secondPlayer);

    if(winner){
        resultMessage.innerHTML = winner + "wins!";
    }
    else{
        resultMessage.innerHTML = "It's a tie!";
        setTimeout(rollDice, 1000);
    }
}









































// const diceImages = [
//     "images/dice1.png",
//     "images/dice2.png",
//     "images/dice3.png",
//     "images/dice4.png",
//     "images/dice5.png",
//     "images/dice6.png"
//   ];

//   // Get references to DOM elements
//   const player1DiceElement = document.getElementById("player1Dice");
//   const player2DiceElement = document.getElementById("player2Dice");
//   const rollButton = document.getElementById("rollButton");
//   const resultMessage = document.getElementById("resultMessage");

//   // Roll the dice when the button is clicked
//   rollButton.addEventListener("click", rollDice);

//   // Function to generate a random number between 1 and 6
//   function roll() {
//     return Math.floor(Math.random() * 6) + 1;
//   }

//   // Functio n to determine the winner based on the dice rolls
//   function determineWinner(player1Roll, player2Roll) {
//     if (player1Roll > player2Roll) {
//       return "Player 1";
//     } else if (player2Roll > player1Roll) {
//       return "Player 2";
//     } else {
//       return null; // Draw, roll again
//     }
//   }

//   // Function to update the displayed dice images
//   function updateDiceImages(player1Roll, player2Roll) {
//     player1DiceElement.src = diceImages[player1Roll - 1];
//     player2DiceElement.src = diceImages[player2Roll - 1];
//   }

//   // Main function to roll the dice and determine the winner
//   function rollDice() {
//     const player1Roll = roll();
//     const player2Roll = roll();

//     updateDiceImages(player1Roll, player2Roll);

//     const winner = determineWinner(player1Roll, player2Roll);

//     if (winner) {
//       resultMessage.innerHTML = winner + " wins!";
//     } else {
//       resultMessage.innerHTML = "It's a draw! Rolling again...";
//       setTimeout(rollDice, 2000); // Roll again after 2 seconds for a draw
//     }
//   }