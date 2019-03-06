
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

  // Display initial user score and wins/losses
  $("#display-user-score").text(userScore)
  $("#display-wins").text(userWins);
  $("#display-losses").text(userLosses);

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
      // Check if the number was already generated - if not push to crystalValues array
      if (!crystalValues.includes(randomCrystalValue)) {
        crystalValues.push(randomCrystalValue)
      }
      // Generate the next crystal value
      generateCrystalValues()
    }
  };

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
      $("#game-images").text("");
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
      $("#game-images").text("");
      startGame();
    }
  };

  const createImageTags = (crystalValues) => {
    // for-loop to create on-click events
    for (let i = 0; i < crystalValues.length; i++) {
      // Create an image tag
      let crystalImage = $("<img>");
      // Give the image tag a class name - addClass()
      crystalImage.addClass("display-game-image");
      // Give crystalImage a src link attribute to a crystal image - attr()
      crystalImage.attr("src", `assets/images/${i + 1}.jpg`);
      // Give each crystal a data attribute called 'data-crystalValues' and assign the array value - attr()
      crystalImage.attr("data-crystalValues", crystalValues[i]);
      // Add the crystal images to the website's "game-images" id - append()
      $("#game-images").append(crystalImage);
    };

    // on-click event
    $(".display-game-image").on("click", function () {
      // Get the correct crystal value from data attribute ("data-crystalValues")
      crystalValue = ($(this).attr("data-crystalValues"));
      userScore += parseInt(crystalValue);
      // Display crystal value 
      $("#display-crystal-selected").text(crystalValue);
      // Display updated user score
      $("#display-user-score").text(userScore)
      // Check user score againt "Random Number"
      checkScore(userScore, generatedGameNumber)
    });
  }
  // Function to start game
  const startGame = () => {
    // Invoke game functions
    randomNumber();
    generateCrystalValues();
    createImageTags(crystalValues);
    // Reset Values
    userScore = 0;
    $("#display-user-score").text(userScore);
    $("#display-crystal-selected").text("");
    // test console.logs
    console.log(`Global Random generated number ${generatedGameNumber}`);
    console.log(`Global Random crystalValues ${crystalValues}`);
  }
  // Invoke function
  startGame();
});
