/* list of all the values used in the BrownieClicker game

########################################################
#                  ALL RIGHT RESERVED                  #
#                                                      #
#                                                      #
#                                                      # 
########################################################


*/



/* All Int variables */

export var bonus               = 1;
export var score               = 0;
export var multiplier          = 1;
export var priceAC             = 10;
export var pricMul             = 50;
export var numofAC             = 0;
export var userBrowniePerSec   = 0;
export var usrClickThisSession = 0;
export var amountOfReset       = 0;

export var hour=0,minute=0,second=0;

/*###*/



/* All boolean variables */

export var isClickable       = Boolean();
export var isCollectable     = Boolean();
export var isSpawnable       = Boolean();
export var unableOnClick     = Boolean();

/*###*/


/* All non default type variables */

/* HTML */
export var brownie         = document.querySelector("#clickableBrownie");
export var scoreDisplay    = document.querySelector("#scoreDisplay");
export var autoClickButton = document.querySelector("#autoClick");
export var clickSpeed      = document.querySelector("#speedDisplay");
export var resetDisplay    = document.querySelector("#resetDisplay");

export var multipling      = document.querySelector("#multiplying");
export var clickableBonus  = document.querySelector("#clickablebonus");
export var resetButton     = document.querySelector('#resetButton');
export var openMenuBtn  = document.querySelector('#menuButton');
export var bottomMenu   = document.querySelector('#bottomMenu');
export var subMenu      = document.querySelector('#subMenu');

export var browniesPerClickDisplay       = document.querySelector('#browniesPerClickDisplay');
export var multiplyingDisplay            = document.querySelector("#multiplicatorDisplay");
export var timeLostDisplay               = document.querySelector("#timeLostDisplay");
export var browniesClickedSessionDisplay = document.querySelector("#browniesClickedSessionDisplay");
export var ACHandle                      = window.setInterval(() => {},1000);
export var Timelost                      = window.setInterval(() => {},1000);

export var ClickSound = new Audio('src/sound/crunch.mp3');
/*###*/

/* CSS */
/* export var RootStyle = getComputedStyle(root)
export var navigationBck = RootStyle.getPropertyValue("--navigationBackground")

export var bodyStyle = getComputedStyle(body) */


/*###*/