/* list of all the values used in the BrownieClicker game

########################################################
#                  ALL RIGHT RESERVED                  #
#                                                      #
#                                                      #
#                                                      # 
########################################################


*/



/* All Int variables */

export var bonus       = 0;
export var score       = 0;
export var time        = 0;

/*###*/



/* All boolean variables */

export var isClickable       = Boolean();
export var isCollectable     = Boolean();
export var isSpawnable       = Boolean();
export var unableOnClick     = Boolean();

/*###*/


/* All non default type variables */

/* HTML */
export var brownie         = document.querySelector("#clickable-brownie");
export var scoreDisplay    = document.querySelector("#score-display");
export var autoClickButton = document.querySelector("#autoclickbutton");
export var clickableBonus  = document.querySelector("#clickablebonus")
/*###*/

/* CSS */
/* export var RootStyle = getComputedStyle(root)
export var navigationBck = RootStyle.getPropertyValue("--navigationBackground")

export var bodyStyle = getComputedStyle(body) */


/*###*/
