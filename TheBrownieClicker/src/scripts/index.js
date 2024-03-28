/* 

########################################################
#                  ALL RIGHT RESERVED                  #
#                                                      #
#                                                      #
#                                                      # 
########################################################

*/


import * as vari from "./variables.js";
import * as MItem from "./Items.js";
import DefaultFunction, * as BaseFunc from "./basicfunctions.js"
import EventHandler, * as evha from "./eventhandle.js";

var EHandle = new EventHandler(
  vari.brownie,
  vari.scoreDisplay,
  vari.score,
  vari.autoClickButton,
  vari.multiplier,
  vari.bonus,

  vari.priceAC,
  vari.numofAC,
  vari.ACHandle,

  vari.multiplying,
  vari.pricMul,
  vari.multiplyingDisplay,

  vari.openMenuBtn,
  vari.bottomMenu, 
  vari.subMenu,

  vari.userBrowniePerSec,
  vari.clickSpeed,

  vari.browniesClickedSessionDisplay,
  vari.usrClickThisSession,

  vari.amountOfReset,
  vari.resetButton,
  vari.resetDisplay,

  vari.browniesPerClickDisplay,

  vari.upgradesButton,
  vari.bonusButton,
  vari.skinsButton,
  vari.optionsButton,

  vari.upgradesList,
  vari.bonusList,
  vari.skinsList,
  vari.optionsList,

  vari.autoClickPrice,
  vari.multiplyingPrice,
  vari.resetButtonPrice

  );

var DefFunc = new DefaultFunction(
  vari.second,
  vari.minute,
  vari.hour,
  vari.Timelost,
  vari.timeLostDisplay
  )

EHandle
DefFunc
