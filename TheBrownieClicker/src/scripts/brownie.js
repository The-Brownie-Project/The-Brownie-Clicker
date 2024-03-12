var brownie = document.querySelector("#brownie");
var scoreDisplay = document.querySelector("#score-display");
var autoClickButton = document.querySelector("#autoclickbutton");

var score = 0;

brownie.addEventListener("click", function() {
  score++;
  scoreDisplay.textContent = score;
})

var hasAutoClick = false;

autoClickButton.addEventListener("click", function() {

  if (score >= 50 && hasAutoClick === false) {
    setInterval(function() {
      score++;
      scoreDisplay.textContent = score;
    }, 1000);
    this.classList.add("disabled", "disabled");
    this.textContent = "Auto Click - Purchased";
    hasAutoClick = true;
  } else if (score < 50 && hasAutoClick === false) {
    alert("You don't have enough Brownie!");
  }
})