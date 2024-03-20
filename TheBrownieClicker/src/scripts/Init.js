/* All the usefull functions the program needs */

/* IT IS IMPORTANT THAT ALL FUNCTIONS AND CLASS ARE PLACED BELOW */

export default class Init{
    constructor(
        brownie,
        scoreDisplay,
        score,
        autoClickButton,
        multiplier,
        bonus,
        priceAC,
        numofAC,
        ACHandle,
        multipling,
        priceMul,
        multiplingDisplay
        ){
        this.score = score;
        this.brownie = brownie;
        this.scoreDisplay = scoreDisplay;
        this.autoClickButton = autoClickButton;
        this.priceAC = priceAC;
        this.multiplier = multiplier;
        this.bonus = bonus;
        this.numofAC = numofAC;
        this.ACHandle = ACHandle;
        this.multipling = multipling;
        this.priceMul = priceMul;
        this.multiplingDisplay = multiplingDisplay;
    }
};