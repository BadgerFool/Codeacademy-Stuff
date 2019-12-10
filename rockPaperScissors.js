const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
    return userInput
  } else {
    console.log("Error");
  }
}

const getComputerChoice = () => {
  const randomNumber = (Math.floor(Math.random() * 3))

  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};




const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Tie!";
  }


  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Sorry, you lose!";
    } else {
      return "Congratulations, you Won!";
    }
  };


    if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Sorry, you lose!";
    } else {
      return "Congratulations, you Won!";
    }
  };


    if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Sorry, you lose!";
    } else {
      return "Congratulations, you Won!";
    }
  };

    if (userChoice === "bomb") {
    return "Congratulations, you Won!"
  };
};


const playGame = () => {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`Computer threw: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame()

//Dominic Wheeler
