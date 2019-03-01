
// jQuery
$(document).ready(function () {

  // Global Variables
  // User score
  let userScore = 0;
  // Value assigned to the (4) crystals
  let crystalValues = [];
  // Score the user has to attain 
  let generatedGameNumber = 0;

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
    console.log(`on click crystalValues Array ${imageValueOne}`)
    $("#display-number-selected").text(imageValueOne)
    userScore += imageValueOne;
    console.log(`onclick user score ${userScore}`)
    $("#display-user-score").text(userScore)
  });

  // Set random generated crystal value attribute to image two
  $("#image-two").on("click", function () {
    let imageValueTwo = crystalValues[1];
    console.log(`on click crystalValues Array ${imageValueTwo}`)
    $("#display-number-selected").text(imageValueTwo)
    userScore += imageValueTwo;
    console.log(`onclick user score ${userScore}`)
    $("#display-user-score").text(userScore)
  });

  // Set random generated crystal value attribute to image three
  $("#image-three").on("click", function () {
    let imageValueThree = crystalValues[2];
    console.log(`on click crystalValues Array ${imageValueThree}`)
    $("#display-number-selected").text(imageValueThree)
    userScore += imageValueThree;
    console.log(`onclick user score ${userScore}`)
    $("#display-user-score").text(userScore)
  });

  // Set random generated crystal value attribute to image four
  $("#image-four").on("click", function () {
    let imageValueFour = crystalValues[3];
    console.log(`on click crystalValues Array ${imageValueFour}`)
    $("#display-number-selected").text(imageValueFour)
    userScore += imageValueFour;
    console.log(`onclick user score ${userScore}`)
    $("#display-user-score").text(userScore)
  });

  // Display initial user score
  $("#display-user-score").append(userScore)
  // Invoke functions test and console.logs
  randomNumber();
  generateCrystalValues();
  console.log(`Global Random generated number ${generatedGameNumber}`)
  console.log(`Global Random score ${userScore}`)
});


