
// jQuery
$(document).ready(function () {

  // Global Variables
  // User score
  let userScore;
  // Score the user has to attain 
  let generatedGameNumber = 0;
  // Value assigned to the (4) crystals
  let crystalValues = [];
  // Wins counter
  let userWins = 0;
  // Losses counter 
  let userLosses = 0;

  // Generate range of random numbers between 19 - 120 for Game Number
  const randomNumber = () => {
    let rand = Math.floor(Math.random() * (120 - 19) + 19);
    generatedGameNumber = rand;
    // Display random number to game website
    $("#generated-number").text(generatedGameNumber)
  };

  // Generate (4) random numbers for crystal values between 1 - 12
  const generateCrystalValues = () => {
    if (crystalValues.length < 4) {
      let randomCrystalValue = Math.floor((Math.random() * 12) + 1);
      // Check if number was already generated - if not push to crystalValues array
      if (!crystalValues.includes(randomCrystalValue)) {
        crystalValues.push(randomCrystalValue)
      }
      // Generate the next crystal value
      generateCrystalValues()
    }
  };

  // onClick events for attached to images
  // Set random generated crystal value attribute to image one
  $("#image-one").on("click", function () {
    let imageValueOne = crystalValues[0];
    $("#display-number-selected").text(imageValueOne)
    userScore += imageValueOne;
    $("#display-user-score").text(userScore)
    checkScore(userScore, generatedGameNumber)
  });

  // Set random generated crystal value attribute to image two
  $("#image-two").on("click", function () {
    let imageValueTwo = crystalValues[1];
    $("#display-number-selected").text(imageValueTwo)
    userScore += imageValueTwo;
    $("#display-user-score").text(userScore)
    checkScore(userScore, generatedGameNumber)
  });

  // Set random generated crystal value attribute to image three
  $("#image-three").on("click", function () {
    let imageValueThree = crystalValues[2];
    $("#display-number-selected").text(imageValueThree)
    userScore += imageValueThree;
    $("#display-user-score").text(userScore)
    checkScore(userScore, generatedGameNumber)
  });

  // Set random generated crystal value attribute to image four
  $("#image-four").on("click", function () {
    let imageValueFour = crystalValues[3];
    $("#display-number-selected").text(imageValueFour)
    userScore += imageValueFour;
    $("#display-user-score").text(userScore)
    checkScore(userScore, generatedGameNumber)
  });

  // Check user score against game number
  const checkScore = (userScore, generatedGameNumber) => {
    // If userScore is greater than generatedGameNumber
    if (userScore > generatedGameNumber) {
      // Increase user losses counter by 1;
      userLosses += 1;
      // Display message to user
      $("#display-message").text("You Lose")
      $("#display-losses").text(userLosses);
      // Start new game
      crystalValues = [];
      startGame();
      // Else if userScore matches generatedGameNumber
    } else if (userScore === generatedGameNumber) {
      // Increase user wins counter by 1;
      userWins += 1;
      // Display message to user
      $("#display-message").text("You Won!!!")
      $("#display-wins").text(userWins);
      // Start new game
      crystalValues = [];
      startGame();
    }
  };

  // Display initial user score
  $("#display-user-score").text(userScore)
  $("#display-wins").text(userWins);
  $("#display-losses").text(userLosses);

  // Invoke functions test and 
  const startGame = () => {
    // Invoke game functions
    randomNumber();
    generateCrystalValues();
    // Reset Values
    userScore = 0;
    $("#display-user-score").text(userScore);
    $("#display-number-selected").text("");
    // test console.logs
    console.log(`Global Random generated number ${generatedGameNumber}`);
    console.log(`Global Random crystalValues ${crystalValues}`);
  }
  checkScore(userScore, generatedGameNumber)
  startGame();



});


