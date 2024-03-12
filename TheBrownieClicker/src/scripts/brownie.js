var brownie = document.querySelector("#imageBrownie");
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
    playAudio('src/sound/buy.mp3');
    hasAutoClick = true;
  } else if (score < 50 && hasAutoClick === false) {
    alert("You don't have enough Brownie!");
  }
})

function playAudio(url) {
  let audio = new Audio(url);
  audio.volume = 0.01;
  audio.play();
}
