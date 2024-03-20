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
  vari.multipling,
  vari.pricMul,
  vari.multiplyingDisplay
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

/* function playAudio(url) {
  let audio = new Audio(url);
  audio.volume = 0.01;
  audio.play();
} */