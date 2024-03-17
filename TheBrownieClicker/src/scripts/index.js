import * as vari from "./variables.js";
import * as MItm from "./Items.js";
import DefaultFunction, * as BaseFunc from "./basicfunctions.js"
import EventHandler, * as evha from "./eventhandle.js";
/* 
vari.brownie.addEventListener("click", function() {
  vari.score++;
  vari.scoreDisplay.textContent = vari.score;
}) */

var basics = new DefaultFunction(vari.time)
var EHandle = new EventHandler(vari.scoreDisplay)
let Score = vari.score;
basics.sleep(10000)

while(true){
  /* EHandle.Scoring(Score,vari.scoreDisplay) */
}


/* var hasAutoClick = false;

autoClickButton.addEventListener("click", function() {

  if (vari.score >= 50 && hasAutoClick === false) {
    setInterval(function() {
      vari.score++;
      vari.scoreDisplay.textContent = vari.score;
    }, 1000);
    this.classList.add("disabled", "disabled");
    this.textContent = "Auto Click - Purchased";
    playAudio('src/sound/buy.mp3');
    hasAutoClick = true;
  } else if (vari.score < 50 && hasAutoClick === false) {
    alert("You don't have enough Brownie!");
  }
})

function playAudio(url) {
  let audio = new Audio(url);
  audio.volume = 0.01;
  audio.play();
} */