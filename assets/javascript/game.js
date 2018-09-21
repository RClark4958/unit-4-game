window.onload = function() {

  var userScore = 0;
  $(".yourScoreDisplay").html(userScore);
  var wins = 0;
  var losses = 0;

  var random = Math.floor(Math.random() * 101 + 19);

  $(".randomNumDisplay").html(random);
  console.log("Random number: " + random);

  var greenCrystal = Math.floor(Math.random() * 11 + 1);
  console.log("Green: " + greenCrystal);
  var redCrystal = Math.floor(Math.random() * 11 + 1);
  console.log("Red: " + redCrystal);
  var purpleCrystal = Math.floor(Math.random() * 11 + 1);
  console.log("Purple: " + purpleCrystal);
  var silverCrystal = Math.floor(Math.random() * 11 + 1);
  console.log("Silver: " + silverCrystal);

  function countWins() {
    alert("You won!");
    wins++;
    $("#winCounter").html("WINS: " + wins);
    reset();
  }

  function countLosses() {
    alert("You lost!");
    losses++;
    $("#lossCounter").html("LOSSES: " + losses);
    reset();
  }

  function reset() {
    
    random = undefined;
    greenCrystal = undefined;
    redCrystal = undefined;
    purpleCrystal = undefined;
    silverCrystal = undefined;
    
    var random = Math.floor(Math.random()* 101 + 19);
    
    $(".randomNumDisplay").html(random);
    console.log("Random number: " + random);
    var greenCrystal = Math.floor(Math.random() * 11 + 1);
    console.log("Green: " + greenCrystal);
    var redCrystal = Math.floor(Math.random() * 11 + 1);
    console.log("Red: " + redCrystal);
    var purpleCrystal = Math.floor(Math.random() * 11 + 1);
    console.log("Purple: " + purpleCrystal);
    var silverCrystal = Math.floor(Math.random() * 11 + 1);
    console.log("Crystal: " + silverCrystal);

    userScore = 0;
    $(".yourScoreDisplay").html(userScore);
  }


  $(".clickGreenImage").on("click", function() {

      userScore = userScore + greenCrystal;
      $(".yourScoreDisplay").html(userScore);
      if (userScore === random) {
        countWins();
      }
      else if (userScore > random) {
        countLosses();
      }
  })
  $(".clickRedImage").on("click", function() {

      userScore = userScore + redCrystal;
      $(".yourScoreDisplay").html(userScore);
      if (userScore === random) {
        countWins();
      }
      else if (userScore > random) {
        countLosses();
      }
  })
  $(".clickPurpleImage").on("click", function() {

      userScore = userScore + purpleCrystal;
      $(".yourScoreDisplay").html(userScore);
      if (userScore === random) {
        countWins();
      }
      else if (userScore > random) {
        countLosses();
      }
  })
  $(".clickSilverImage").on("click", function() {

      userScore = userScore + silverCrystal;
      $(".yourScoreDisplay").html(userScore);
      if (userScore === random) {
        countWins();
      }
      else if (userScore > random) {
        countLosses();
      }
  })

}