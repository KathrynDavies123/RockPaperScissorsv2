//Declarations

//div container containing the box where the user selects the number of rounds --> while the game is in play this will transform into how many rounds have been played out of the total
let roundsBox = document.querySelector("#roundsBox");

//output text for the player and computer score
let scoreOutputPlayer = document.querySelector("#scorePlayer");
let scoreOutputComp = document.querySelector("#scoreComputer");

//h3 containing "Let's Play!" --> while the game is in play this will display the outcome of the round last played using images
let playOutputText = document.querySelector("#playText");

//reset button
let resetButton = document.querySelector("#resetButton");

//array containing computer options
let computerOptions = ["rock", "paper", "scissors"];

//select all buttons for event listener later
let playerButtons = document.querySelectorAll("#game-select button");

//variables for moves, player score and computer score
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let roundsTotal;

//Functions

//event listener so that the page reloads when the button is pressed
resetButton.addEventListener("click", function () {
  location.reload();
});

document.querySelectorAll(".selectionRadios input").forEach((item) =>
  item.addEventListener("click", (event) => {
    roundsTotal = event.target.value;

    document
      .querySelectorAll("#game-select button")
      .forEach((item) => (item.disabled = false));
  })
);

//event listener for each button, so that the game function runs whenever one of them is pressed
playerButtons.forEach(function (item) {
  item.addEventListener("click", function (event) {
    let computerSelection = computerOptions[Math.floor(Math.random() * 3)];
    let playerSelection = event.target.value;
    if (playerSelection == "rock") {
      if (computerSelection == "rock") {
        playOutputText.innerHTML =
          "<img src='./assets/img/button_rock.svg'> <img src='./assets/img/button_rock.svg'>";
      } else if (computerSelection == "paper") {
        playOutputText.innerHTML =
          "<img src='./assets/img/button_rock.svg'> <img src='./assets/img/button_paper.svg'>";
        computerScore++;
        roundsPlayed++;
      } else if (computerSelection == "scissors") {
        playOutputText.innerHTML =
          "<img src='./assets/img/button_rock.svg'> <img src='./assets/img/button_scissors.svg'> ";
        playerScore++;
        roundsPlayed++;
      }
      scoreOutputComp.innerText = computerScore;
      scoreOutputPlayer.innerText = playerScore;
    } else if (playerSelection == "paper") {
      if (computerSelection == "rock") {
        playOutputText.innerHTML =
          "<img src='./assets/img/button_paper.svg'> <img src='./assets/img/button_rock.svg'> ";
        playerScore++;
        roundsPlayed++;
      } else if (computerSelection == "paper") {
        playOutputText.innerHTML =
          "<img src='./assets/img/button_paper.svg'> <img src='./assets/img/button_paper.svg'>";
      } else if (computerSelection == "scissors") {
        playOutputText.innerHTML =
          "<img src='./assets/img/button_paper.svg'> <img src='./assets/img/button_scissors.svg'>";
        computerScore++;
        roundsPlayed++;
      }
      scoreOutputComp.innerText = computerScore;
      scoreOutputPlayer.innerText = playerScore;
    } else if (playerSelection == "scissors") {
      if (computerSelection == "rock") {
        playOutputText.innerHTML =
          "<img src='./assets/img/button_scissors.svg'> <img src='./assets/img/button_rock.svg'>";
        computerScore++;
        roundsPlayed++;
      } else if (computerSelection == "paper") {
        playOutputText.innerHTML =
          "<img src='./assets/img/button_scissors.svg'> <img src='./assets/img/button_paper.svg'>";
        playerScore++;
        roundsPlayed++;
      } else if (computerSelection == "scissors") {
        playOutputText.innerHTML =
          "<img src='./assets/img/button_scissors.svg'> <img src='./assets/img/button_scissors.svg'>";
      }
      scoreOutputComp.innerText = computerScore;
      scoreOutputPlayer.innerText = playerScore;
    }
    roundsBox.innerHTML =
      "<h2>Rounds played: " + roundsPlayed + "/" + roundsTotal + "</h2>";
    if (
      roundsPlayed == roundsTotal ||
      playerScore > roundsTotal / 2 ||
      computerScore > roundsTotal / 2
    ) {
      document
        .querySelectorAll("#game-select button")
        .forEach((item) => (item.disabled = true));
      playOutputText.classList.add("winnerClass");
      if (playerScore > computerScore) {
        playOutputText.innerText = "You Win!";
      } else if (computerScore > playerScore) {
        playOutputText.innerText = "Computer Wins!";
      } else if (playerScore == computerScore) {
        playOutputText.innerText = "It's a draw!";
      }
    }
  });
});